import React from 'react';
import { useState } from 'react';

function MainPage(){
    return (
        <div>
            {/* <h1>ChatGPT</h1> */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img class="w-full h-56 object-cover object-center" src="https://picsum.photos/600/400" alt="Card image"/>
            <div class="p-4">
                <h2 class="text-gray-900 font-bold text-2xl mb-2">Card Title</h2>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris quis mauris eget eros imperdiet fermentum. Donec vel magna nisl. 
                    Proin vitae mi ac sapien vehicula lacinia.
                </p>
            </div>
            <form class="flex flex-col items-center">
                <label for="website-address" class="font-bold mb-2 text-gray-700">Enter website address</label>
                <div class="flex">
                <input id="website-address" type="text" class="border border-gray-400 py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default MainPage;