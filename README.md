#### About me and this project

Hello! This is my Portfolio project.


Im Matias Gomez, I'm a web developer based in Argentina.
I've been learning software development for a couple of years now. Before this I did some handcrafted woodworking.

First I learned Python and there I did the torre-de-mabel project for the first time. Then I learned Java and I built the first steps of a food recipes Restful API. More recently I pivoted again to fullstack web development to have a better grasp of all aspects of what I do.

In this portfolio site there is an overview of my more representative projects. First there is a newer live version of the madlibs project. Second is an ecommerce app for a real local buisiness. This last one never went live.


### Docs

#### Dir structure

/
-/_posts
&nbsp;&nbsp; ¦--/public
&nbsp;&nbsp; ¦--/locales
&nbsp;&nbsp; ¦--/assets
-/src
&nbsp;&nbsp;¦--/app
&nbsp;&nbsp;&nbsp;&nbsp;¦--/(home)
&nbsp;&nbsp;&nbsp;&nbsp;¦--/api
&nbsp;&nbsp;&nbsp;&nbsp;¦--/blog
&nbsp;&nbsp;&nbsp;&nbsp;¦--/cv
&nbsp;&nbsp;&nbsp;&nbsp;¦--/posts
&nbsp;&nbsp;&nbsp;&nbsp;¦--/torre-de-mabel   
&nbsp;&nbsp;¦--/components
&nbsp;&nbsp;¦--/lib
&nbsp;&nbsp;¦--/models
&nbsp;&nbsp;¦--/store


#### General notes and thoughts on the building process

This app is made with ```create-next-app``` using the **App Router** structure and deployed on Vercel's free tier. The styling is done with **TailwindCSS** and the state management is done with **Zustand**. 

##### Home

There is a ```<Landing />``` component mounted on *'/'* and this conifugration already has the layout that will be the same across the whole app. On said layout there are a ```<Navigator />``` and a ```<Footer />``` components that handle navigation within the app and to third-party sites. On each layout there is also the metadata for different interactions.
There are three different directions on the navbar (*'/'*, *'/cv'*, *'/blog'*). Within ```<Landing />``` there is also a link to *'/torre-de-mabel'*. And lastly on the footer there are links to my socials.
> For the *'/'* directory I faced an issue where I didn't want the layout to be the exact same in the whole site. That came up when I was testing *'/torre-de-mabel'*. So I decided to make a route group -put *'src/(home)/'* as a folder- so that every other page would be able to have their own layout and metadata. 

All the text in ```<Landing />``` and ```<Cv />``` is served from *'/locales'*. I used **i18next** for this. For this purpose on the navbar there also is a ```<LanguageSwitcher />``` that displays and language choices and allows to pick. 
> A bit I really like -and enjoy having there- is the possibility of showing a different link -to the correct language docuemtn- when the general site language is changed. 

##### API

The *'/api/\*'* routes are all the different endpoints where data is fetched. Each component that requires some info from the db calls on the api and returns what's needed.
All the basic CRUD operations are planned.
At the moment there are:
+ /cuentos/all GET (all cuentos)
+ /creacion/all GET (all creacions) POST(posts a new user created story)

All calls are made to a **MongoAtlas DB** where there is a collection with a Torre db with cuento(s) and creacion(s) records. 

##### Torre de Mabel

This is a multi step process that has four stages that are:
+ ```<Bienvenide />```
+ ```<DiceRoll />```
+ ```<Prompting />```
+ ```<PlayAgain />```

Here's where **Zustand** comes into play. Global state tracking here comes really handy with this arqitecture. activeStep() tracks and setActiveStep() sets the step we're in. On step 2, when the user signs and rolls dice to get a story assigned, the db is called and populated. Future uses of this step after saving a story will not call the db again for this same purpose.
Then step 3 handles the game logic itself. There is a ```<Prompt />``` component however many words the picked story might have and updates the state. Finally in step 4 the template story is filled with the provided words and presented to the user together with options to just play again or save the story. 





