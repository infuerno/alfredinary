# Alfredinary

Alfred 👉 Take Screenshot 👉 Cloudinary 👉 Clipboard

Forked from https://github.com/urre/alfredinary.

## Features

This workflow provides this in a single command:

1. Take screenshot on your mac
2. Upload it to [Cloudinary](https://cloudinary.com)
3. Get back the https image link in your clipboard
4. Paste and use! <kbd>cmd ⌘</kbd>+<kbd>V</kbd>

## Why?

- Quickly share screenshots
- No need to store the files on your computer if you don't want.
- Https image links
- Secure
- All the benefits from Cloudinary. Image management, image management transformations (ex via URL parameters), cloud storage, fast delivery via CDN.

## Install

1. Install the npm package

```bash
npm install -g alfredinary
```

2. Create env-file. When installed, open up Alfred Workflows and right click to open the workflow directory in Terminal/finder. Create an `.env` file in the project root. You can rename `.env-example` to `.env`. Edit `PATHNAME` AND `FILENAME` as you wish.

```bash
CLOUDNAME="XXXXX"
APIKEY="XXXXXXXXXXXX"
APISECRET="XXXXXXXXXXXX"
PATHNAME="/Users/myusername/Sync/Pictures/Screenshots/"
FILENAME="screenshot.jpg"
FOLDERNAME="/screenshots"
```

Get cloudname, apikey and apisecret from your account on [Cloudinary](https://cloudinary.com). Don't have an account? Get one. It's free.

3. Edit temp location (pathname and filename) of the screenshot on disk. The default is `/Users/${username}/Sync/Pictures/Screenshots/screenshot.jpg`

Edit the yellow bash script in the image below.

<img width="931" alt="Workflow" src="https://cloud.githubusercontent.com/assets/307676/19521747/1cf6bc2e-9615-11e6-96d5-79ea022918dc.png">

## Use

1. Open Alfred and type "sc". Optionally specify the filename to be used for the public url on Cloudinary e.g. "sc network-layers-diagram". A random 6 letter suffix will automatically be appended e.g. network-layers-diagram-fyihys.png. 

<img width="701" alt="Alfred" src="https://res.cloudinary.com/infuerno/image/upload/v1632348769/screenshots/alfredinary-screenshot-gmqqfd.png">

2. Take a screenshot as usual, mark section of your screen or use <kbd>Space</kbd> to select the current window.

3. Alfredinary now uploads that screenshot to your Cloudinary account, and you will get back a https image link.

4. <kbd>cmd ⌘</kbd>+<kbd>V</kbd>

![Cloudinary](https://cloud.githubusercontent.com/assets/307676/19523739/b9d18f78-961b-11e6-96ff-49bedaf8b690.jpg)
