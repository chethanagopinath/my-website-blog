---
title: 'Fixing UI in website'
date: '2024-01-07'
---

### In progress 🚧

Tried NextUI after chakra - the UI still continued to look buggy and then went to the thought process of why I need to use a fancy UI framework when all I have is a button + 4 connect buttons with icons

Followed this: https://nextjs.org/docs/app/building-your-application/styling/tailwind-css

to add CSS into the NextJS project - uninstalled and scrapped everything that I had for NextUI

Included the files that will use Tailwindcss utility classes into the config file

Started running into this error while adding to global.css:
https://stackoverflow.com/questions/70597844/unknown-at-rule-tailwind-css-in-reactjs

Fixed with installing this extension: https://marketplace.visualstudio.com/items?itemName=csstools.postcss

Use the TailwindCSS Intellisense extension to be able to use classes

Starting this generic class to apply to all buttons:
```css
.btn {
  @apply rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider;
}
```

This is the layout and color scheme in mind
<br />

![layout](https://drive.google.com/uc?id=1YVy5yTlf6mh9XsNwDxOjvv2buJsZsVko)

Applying individual classes to the respective buttons

I want to get a rounded purple bg button with hover color + click color 

Resume looking good now.

Looking at the other icons: Email, LinkedIn and GitHub

Added this for spacing and color with tailwindcss:
Example: 
```js
<a className='px-1 text-teal-600 fill-current' href={`mailto:${email}`}>
  <MdEmail />
</a>
```
