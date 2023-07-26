export interface IForProApi_site {
    "title":        string,
    "description":  string,
    "footer": {
        "left": string,
        "right": string
    },
    "sectionsDetails": {[key: string]: IWebsiteApiSectionUrl},
    blogDetails: {
        title: {
            value: string
        }
    },
    "newsletterCode": string
}

export interface IWebsiteApiSectionUrl {
    "title": {
        "value": string
    },
    "url": string,
    "slug": string,
    "blueprint": string
}

export interface IForProApi_section {
    "title": string,
    "coverImage": {[key: string]: IForPro_image} | null,
    "textIntro": string,
    "content": {[key: string]: IForPro_blocksContent},
    "faqTitle": null,
    "faqOption": "tag1, tag3, tag2"
}

export interface IForPro_blocksContent {
    "type":
        "heading"
        | "text"
        | "image"
        | "quote",
    "isHidden": boolean
}
// todo: clean create generic type for diff blocks types
export interface IForPro_blocksContent_isImage extends IForPro_blocksContent {
    data?: {
        "title": string,
        "isfixed": boolean,
        "photographer": string,
        "license": string,
        "image": IForPro_image | null
    },
    "type":
      | "image"
}

export interface IForPro_blocksContent_isTextContent extends IForPro_blocksContent {
    "html": string,
    "type":
      "heading"
      | "text"
      | "quote",
}

export interface IForPro_blog {
    "title": string,
    "pages": {
        [key: string]: IForPro_blog_articleInformations
    }
}

export interface IForPro_blog_articleInformations {
    "title": {
        "value": string
    },
    "url": string,
    "slug": string,
    "blueprint": string
    "coverImage" : IForPro_image,
    "typeOfContent" : {
        "value": blogArticleTypeOfContent
    }
    "textIntro" : {
        value: string
    }

    "eventDate": {
        "value": string
    } | null,
    "publicationDate": {
        "value": string
    } | null
}

export interface IForPro_image {
    "url":          string,
    "mediaUrl":     string,
    "width":        number,
    "height":       number,
    "resize": {
        "tiny":     string,
        "small":    string,
        "reg":      string,
        "large":    string,
        "xxl":      string
    }
}

export type blogArticleTypeOfContent = "event" | "article" | "project" | "construction"

export function converteBlogArticleTypeOfContent(typeContent: blogArticleTypeOfContent): string {
    switch (typeContent) {
        case 'article':
            return "Article"
        case 'project':
            return "Projet"
        case 'event':
            return "Événement"
        case 'construction':
            return "Le chantier"
    }
}

export interface IForPro_blogArticle {
    "url": string,
    "slug": string,
    "blueprint": string,
    "textIntro": {
        "value": string
    },
    "title": string,
    "coverImage" : {[key: string]: IForPro_image} | null,
    "typeOfContent": {
        "value": blogArticleTypeOfContent
    },
    "blockContent": {
        [key: string]: IForPro_blocksContent
    },
    "eventDate": {
        "value": string
    },
    "publicationDate": {
        "value": string
    },
    "author": string,
}


export async function fetchForProApi_site(): Promise<IForProApi_site> {
    const response = await fetch("http://localhost:8000/api-v2/site")
    return await response.json()
}

export async function fetchForProApi_section(slug: string): Promise<IForProApi_section> {
    const response = await fetch(`http://localhost:8000/api-v2/sections/${slug}`)
    return await response.json()
}

export async function fetchForProApi_blog(): Promise<IForPro_blog> {
    const response = await fetch(`http://localhost:8000/api-v2/blog`)
    return await response.json()
}

export async function fetchForProApi_blogArticle(slug: string): Promise<IForPro_blogArticle> {
    const response = await fetch(`http://localhost:8000/api-v2/blog/${slug}`)
    return await response.json()
}

