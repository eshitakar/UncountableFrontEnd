# Uncountable Front End

This repository is a simple UI renderer for a sample set of experimental data. The data is rendered in a web-app format with two views -- one for simply looking at the inputs and outputs of the experiment defined in the data, and one for visuailzing trends between the inputs and outputs via a scatterplot. 

### Running/Testing

In order to run this web-app, it is recommended to install expo via ```npm i expo``` and potentially install expo-cli via ```npm i expo-cli```. Make sure to run ```npm install``` once in the ```uncountable-front-end``` directory to install all relevant dependencies, then run ```expo start:web``` to start up a local view of the web-app. Follow the url linked to see the web-app render.

### Design Choices

Given that I had a limited amount of time to work with, I decided the most important aspects of rendering a web-app for this data were to:
1. Display the data in a readable format
2. Have an interface to visualize how inputs affect outputs
3. Easy to understand UI with minimal text

Putting myself in the shoes of an R&D person, I think being able to view the data itself in a clean manner is key to the function of exploring a dataset. Thus, point (1) is a high priority feature. Secondly, being able to easily toggle through inputs and explore the relationship between inputs and outputs are also very important when running experiments -- hence, why (2) was another high priority feature.

(3) is a little different from the rest of these points. My philosophy as both a front-end developer and a user of various UI/UX is that the fewer words there are, the better. Humans are inherently visual learners, so it is important that an interface can be used without having to read instructions or documentation. Thus, I decided a priority, albeit lesser than the first two, would be to minimize instruction text and maximize the intuitiveness of the web-app. Given that the functionality of the web-app is relatively simple, I also figured (3) would not be too difficult to implement.

### Future Work

Given more time to analyze the data and use-case, I'd work on error-handling and adding additional features. In-depth error-handling at this point in the process is difficult because the expected behavior for error-handling isn't really defined in this context -- should the web-app not render anything? What kind of data can we even expect from the user? After doing some customer research, these questions should be answered and error-handling can happen. 

In terms of additional features, I'd like to add a filtering view on the Data tab, to allow users to filter experiments on thresholds for inputs/outputs. I'd also like to add a searching ability and perhaps tagging ability to make filters more useful. Lastly, allowing users to upload their own file on a tab would also be useful, to allow them to visualize several different files instead of just the sample one given.