---
title: 'Fixing markdown files styles in my blog'
date: '2023-12-09'
---

### Problem
The styles were not rendering within my blog posts making them look like they were unstyled.

### Context
Code snippet where we parse markdown and convert them into HTML strings.

```python
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
    id,
    contentHtml,
    ...matterResult.data,
    };
}

```

While printing the above HTML string `contentHtml`, the tags are intact and have not converted into other tags during the parsing stage.

For example `### === <h3>` from markdown -> HTML

![tags-intact](https://drive.google.com/uc?id=1Ajd7tcK_nubLRdlI9vdLj8e_pRJkEVLo)

([good workaround for embedding google drive links 🎉](https://www.intodeeplearning.com/embedding-images-in-google-drive-to-markdown/))

### Digging deeper
If this is not caused by incorrect HTML strings, what else would be affecting this?

Decided to take a look at the element in the rendered page using `Inspect` and saw something interesting.

There were 2 font props with `inherit` that was causing font and styling to disappear for font based styles.

![before-removing-inherit](https://drive.google.com/uc?id=1uqH7zUB49XbEPEJ9nmidzo6L7Jlbi_13)

After disabling this on browser itself, we see the styles apply

![after-removing-inherit](https://drive.google.com/uc?id=1kI4UqkoWF_1bjTyaAYSyVn_BviCAb5l2)


Trying to look at the parent element causing this change, looks like ChakraUI was adding some global CSS styles

![chakra-ui-weirdness](https://drive.google.com/uc?id=1dfuzKMEecocAx1eHsNNUu6Padd8fAxCP)

I had wrapped ChakraUI over the entry component.

Problematic code in `_app.js`:
```javascript
<ChakraProvider>
    <Component {...pageProps} />
</ChakraProvider>
```

This issue can help with context: https://github.com/chakra-ui/chakra-ui/issues/4427


### Fixing this
1. Trying the solution from [the issue](https://github.com/chakra-ui/chakra-ui/issues/4427#issuecomment-884400072) 

```javascript
<ChakraProvider resetCss={false} />
```
did not help with what I was seeing

2. Removing ChakraProvider helps bring back the styles that I was expecting 🎉

But this messes up the chakra-ui components I have on the Home page of the website. I am planning to revisit with NextUI and not Chakra anymore. Thats for the next time.

## ✨ Small wins are wins as well ✨