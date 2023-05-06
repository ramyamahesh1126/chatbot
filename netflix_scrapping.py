import sys

def cook_soup_from_url(url, parser='lxml',sleep_time=0):
    """Uses requests to retreive webpage and returns a BeautifulSoup made using lxml parser."""
    import requests
    from time import sleep
    from bs4 import BeautifulSoup

    sleep(sleep_time)
    response = requests.get(url)

    # check status of request
    if response.status_code != 200:
        raise Exception(f'Error: Status_code !=200.\n status_code={response.status_code}')

    s = BeautifulSoup(response.text,"html.parser")
    soup = BeautifulSoup(response.text,'lxml')
    return soup

def get_all_links(soup):#,attr_kwds=None):
    """Finds all links inside of soup that have the attributes(attr_kwds),which will be used in soup.findAll(attrs=attr_kwds).
    Returns a list of links.
    tag_type = 'a' or 'href'"""
    all_a_tags = soup.findAll('a')#,attrs=kwds)
    link_list = []
    for link in all_a_tags:
        # if link is not None and (link.startswith('http') or link.startswith('/')):
          test_link = link.get('href')#,attr=kwds)
          link_list.append(test_link)
#         test_link = link.get('href',attrs=kwds)
    return link_list

def make_absolute_links(source_url, rel_link_list):
    """Accepts the source_url for the source page of the rel_link_list and uses urljoin to return a list of valid absolute links."""

    from urllib.parse import urlparse, urljoin

    absolute_links=[]

    # Create a for loop to loop through links and make absolute html paths
    for link in rel_link_list:

        # Get base url using a url pasers and the story_url at the beginning of the nb
        abs_link = urljoin(source_url,link)

        #concatenate and append to a list
        if abs_link.startswith('http'):
          absolute_links.append(abs_link)

    return absolute_links

url_dict_key = ""
def cook_batch_of_soups(link_list, sleep_time=1): #,user_fun = extract_target_text):
    """Accepts a list of links to extract and save in a list of dictionaries of soups
    with their relative url path as their key.
    Set user_fun to None to just extract full soups without user_extract"""
    from time import sleep
    from urllib.parse import urlparse, urljoin

    batch_of_soups = []

    for link in link_list:
        soup_dict = {}


        # turn the url path into the dictionary key/title
        url_dict_key_path = urlparse(link).path
        url_dict_key = url_dict_key_path.split('/')[-1]
                soup_dict['_url'] = link
        soup_dict['path'] = url_dict_key

        # make a soup from the current link
        page_soup = cook_soup_from_url(link, sleep_time=sleep_time)
        soup_dict['soup'] = page_soup
        batch_of_soups.append(soup_dict)

    return batch_of_soups

t = ''
def extract_target_text(soup_or_tag,tag_name='p', attrs_dict=None, join_text =True, save_files=True):
    global t
    if attrs_dict==None:
        found_tags = soup_or_tag.find_all(name=tag_name)
    else:
        found_tags = soup_or_tag.find_all(name=tag_name,attrs=attrs_dict)


    # if extracting from multiple tags
    output=[]
    output = [tag.text for tag in found_tags if tag.text is not None]

    if join_text == True:
        output = ' '.join(output)

    t+=output

    # filename =f"drive/My Drive/text_extract_new.txt"
    # f = open(filename, "a")

    ## ADDING SAVING EACH
    # if save_files==True:
    #     text = output #soup.body.string
    #     f.write("\n")
    #     f.write(text)
    #     f.close()
    #     # soup_dict['filename'] = filename
    #     # with open(filename,'a+') as f:
    #     #      f.write(text)
    #     print(f'File  successfully saved as {filename}')
    # f.close()
    return  output

def main_func(weblink):
  import requests
  from bs4 import BeautifulSoup
  from urllib.parse import urlparse, urljoin
  from fake_useragent import UserAgent
  url = weblink

  response = requests.get(url, timeout=3)
  # print('Status code: ',response.status_code)
  # if response.status_code==200:
  #     print('Connection successfull.\n\n')
  # else:
  #     print('Error. Check status code table.\n\n')
  if response.status_code==200:
      try:
        soup = cook_soup_from_url(url,sleep_time=1)
        kwds = {'class':'mw-redirect'}
        links = get_all_links(soup)#,kwds)
        abs_links = make_absolute_links(url,links)
        batch_of_soups = cook_batch_of_soups(abs_links, sleep_time=2)
        for i, soup_dict in enumerate(batch_of_soups):
            soup = soup_dict['soup']
            extracted_text = extract_target_text(soup)
            soup_dict['extracted'] = extracted_text
            batch_of_soups[i] = soup_dict
        with open("output.txt", "w") as f:
            print(t, file=f)
        print(t)
      except ExceptionType as e:
        return 'Error'
  else:
    return 'Error'

if __name__ == '__main__':
    if len(sys.argv) > 1:
        weblink = sys.argv[1]
        main_func(weblink)
    else:
        print("Please provide a name as an argument.")
