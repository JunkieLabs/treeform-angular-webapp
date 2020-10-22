
<h1 align="center">Treeform: Angular Example Webapp</h1> 

<div align="center">
<img  src="https://firebasestorage.googleapis.com/v0/b/thedroid-835ee.appspot.com/o/developments%2Ftreeform_2.png?alt=media&token=8122e058-5f70-40a9-a5b2-f01df82193b9" alt="Get it on Google Play"
     height="140"/>

</div>

<h1 align="center">Demo</h1>

<div align="center">
<a  href="https://treeform.junkielabs.in/">https://treeform.junkielabs.in/</a> 
</div>
<br>
<br>


<div align="center">
<img  src="https://firebasestorage.googleapis.com/v0/b/thedroid-835ee.appspot.com/o/developments%2Ftreeform_banner.png?alt=media&token=a4951a8d-3653-4f59-88d0-2c230cbf1578" alt="Treeform demo"
     width="100%"/>

</div>
<br>

---


## What is this repo? 
This repository is maintained by [JunkieLabs](https://www.instagram.com/junkie_labs/) team, is meant to be a beautiful web-app example using Angular 9.0+.

This project contains all of the latest technologies, from design to developemnt, and common features needed in static webapp like Progressing webapp [read here](#PWA), SEO [ search engine]. 


<br>

## Table of contents

- [About](#about)
- [Getting started](#getting-started)
- [Features](#features)
- [Components](#components)
- [Breaking changes](#breaking-changes)
- [FAQ](#faq)
- [Contributors](#contributors)

<br>


# Getting Started:

- **Node version > 10**
- **Angular > 9.0**

### **Initial Setup**


```bash

git clone https://github.com/nirajprakash/treeform-angular-webapp.git 
cd treeform-angular-webapp
npm install
npm start

```


### **Graphics Magick setup**
 This part of setup is needed, if you want to convert images for gallery 
 - Install image magick from [here](https://imagemagick.org/) for your system's OS.
 - For more details [read here](#image-gallery)


### **For PWA**
- Clone the project you haven't done that.
- then checkout into branch: `treeform-pwa`

```bash

git checkout treeform-pwa
npm install
npm start

```


**Note**: If you get any errors during install and build, please put report the issue in the same repo.

<br>

# Features:

> These are some of the important features implemented in this starter!

- **PWA: Progressive Webapp**
  - For more details, [read here](#pwa:-progressive-webapp) 


- **Fully responsive design using flex properties**
  - Responsiveness without using any grid based library.  
  - Usage of next generation [Flex-Layout](https://github.com/angular/flex-layout) library provided by Angular Team.

- **SCSS based atomic styling**
  - Avoided css style based large files.  
  - Scss helps in improving overall quality and pattern of styling.
  - For more details, [ read here](#scss-styling) 

<br>

<br>

# Components:

> These are some of the important components in this app!

- **Image Gallery**
   - Very common gallery system needed in all apps.
- **Angular Animations**
  
<br>


## Image Gallery

The out of box and responsive image gallery made by modifing angular2-image-gallery.


To change the images in **[assets/img/gallery](https://github.com/JunkieLabs/treeform-angular-webapp/tree/master/src/assets/img/gallery)**.
Follow these steps.

- Install [Image Magick](https://imagemagick.org/index.php) in your system. 
- Add Images in any folder except gallery inside assets/img  folder.
- Craete command in pacakge.json file. For example

```json
    "convert:newImages": "node ./image-convert.js --gName=newImages ./src/assets/img/newImages",

```
- In above command newImages is a new folder. And [image-convert.js](https://github.com/JunkieLabs/treeform-angular-webapp/blob/master/image-convert.js) file is the script. After conversion one new folder will be there in assets/img/gallery.

<br>

## PWA: Progressive Webapp



<br>

## SCSS: Styling

``` 
No CSS in any style related file ! The design is fully design using scss structure.

```

All the basic and common scss class has a prefix selector *tb-* to distinguish it from other angular material related classes. you can find the styles in [theme/tb](https://github.com/JunkieLabs/treeform-angular-webapp/tree/master/src/theme/tb)

<br>



<br>


# FAQ:

### Does this library require bootstrap?


``` 
No! There isn't a requirement of this library. The design is implemented only using angular material and SCSS styles.
```



<br>

# Contributors:


<table>
  <tr>
    <td align="center"><a href="https://github.com/bhrthkshr"><img src="https://avatars1.githubusercontent.com/u/14331601?s=460&u=2dd953a5e2f864746a9545a2208d2c3e4f962955&v=4" width="100px;" alt=""/><br /><sub><b>Bharath Kishore</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/MayankKaushal"><img src="https://avatars2.githubusercontent.com/u/26189728?s=460&u=0c0740b7efdf4e1ea885e50317ec41bd57cfcb63&v=4" width="100px;" alt=""/><br /><sub><b>Mayank Kaushal</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/nirajprakash"><img src="https://avatars3.githubusercontent.com/u/4013595?s=400&u=09af7b3ce0c4695ddbc37fd9df5007660611b2e7&v=4" width="100px;" alt=""/><br /><sub><b>Niraj Prakash</b></sub></a><br /></td>
    </table>


<br>
<br>

# Special Thanks:

A special thanks to other 3rd party libraries, which we have used in this project.

- Benjamin Brandmeier: [angular2-image-gallery](https://github.com/BenjaminBrandmeier/angular2-image-gallery)

- Nicholas Koehler(nkoehler): [mat-video](https://github.com/nkoehler/mat-video)

- ZEF Oy: [ngx-swiper-wrapper](https://github.com/zefoy/ngx-swiper-wrapper)

- Aaron Heckmann: [gm](https://github.com/aheckmann/gm)

<br>
<br>

# Further help

This project is an open-source initiative by Junkie Labs team.

For any questions or suggestions send a mail to junkielabs.dev@gmail.com or chat with the core-team on gitter.

[![Gitter](https://badges.gitter.im/JunkieLabs/community.svg)](https://gitter.im/JunkieLabs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


<br>
<br>

# License

[MIT License](https://github.com/JunkieLabs/treeform-angular-webapp/blob/master/LICENSE).