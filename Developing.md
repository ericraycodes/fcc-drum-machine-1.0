# Setup Vite + React + JavaScript in npm

 Official reference guide - [click here](https://v3.vitejs.dev/guide/).

### Run this command in the terminal,
 This is where the **root** folder / directory of the project will be set (Vite will create the project's root directory later):

	npm init vite

### Fill in the follow up prompts in the terminal.

	# Type in the project-name:
	fcc-markdown-previewer-1.0

	# Choose a framework:
	React

	# Choose a variant:
	JavaScript

### After the initial setup...

 Run the following in the terminal:

	# Go inside the created project-root-directory.
	cd fcc-markdown-previewer-1.0

	# Install npm packages that comes with Vite
	npm install

	# Run vite development server. Start developing.
	npm run dev

### Start developing.

 The development files:
 - *Source codes* - like .js, .css, etc. go inside the **./src** sub-folder.
 - The non-code *static files* like images, icons, fonts, json, etc. go inside the **./assets** sub-folder.


# Git initial setup

 ### Create a new repository on the command line.

	# Within the project-root-directory, run the following in the terminal.
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main

	# The URL below is the created remote repository.
	git remote add origin https://github.com/{USER-NAME}/{REPO-NAME}.git
	
	git push -u origin main


 ### Or push an existing repository from the command line.

	git remote add origin https://github.con/{USER-NAME}/{REPO-NAME}.git
	git branch -M master
	git push -u origin master