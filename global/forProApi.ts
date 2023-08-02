import {_AsyncData} from "#app/composables/asyncData"
import {FetchError} from "ofetch"

export interface IForProApi_site {
    "title":        string,
    "sectionsDetails": {[key: string]: IWebsiteApiSectionUrl},
    blogDetails: {
        title: {
            value: string
        }
    },
}

export interface IWebsiteApiSectionUrl {
    "title": {
        "value": string
    },
    "url": string,
    "slug": string,
    "blueprint": string
}

export type forProThemeColor =
    'brown_purple_red'
  | 'sky_blue_orange'
  | 'green_pink_blue'
  | 'brown_yellow_purple'
  | 'white_pink_blue'
  | 'orange_green_pink'
  | 'purple_white_blue'

export interface IForProApi_section {
    "title": string,
    "coverImage": {[key: string]: IForPro_image} | null,
    "themeColor": forProThemeColor,
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
    data?: IForPro_imageByFixedOption,
    "type":
      | "image"
}

export interface IForPro_imageByFixedOption {
    "title": string,
    "isfixed": boolean,
    "photographer": string,
    "license": string,
    "image": IForPro_image | null
}

export interface IForPro_blocksContent_isTextContent extends IForPro_blocksContent {
    "html": string,
    "type":
      "heading"
      | "text"
      | "quote",
}

export interface IFOrProApi_home {
    "title": string,
    "coverImage": IForPro_image,
    "textIntro": string,
    "content": {[key: string]: IForPro_blocksContent}
    "imageFooter": null | IForPro_imageByFixedOption
}

export interface IForPro_blog {
    "title": string,
    "pages": {
        [key: string]: IForPro_blog_articleInformations
    }
}

export interface IForPro_blogLastArticlesInAllSections {
    "lastEvent"?: IForPro_blog_articleInformations
    "lastArticle"?: IForPro_blog_articleInformations
    "lastProject"?: IForPro_blog_articleInformations
    "lastConstruction"?: IForPro_blog_articleInformations
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
    }
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

export interface IForPro_blogArticle extends IForPro_blog_articleInformations {
    "blockContent": {
        [key: string]: IForPro_blocksContent
    },
    "author": string,
}


export async function fetchForProApi_site(): Promise<IForProApi_site> {
    const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/site-informations`)
    return await response.json()
}

export async function fetchForProApi_section(slug: string): Promise<IForProApi_section> {
    const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/sections/${slug}`)
    return await response.json()
}

export async function fetchForProApi_blog(): Promise<IForPro_blog> {
    const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/blog`)
    return await response.json()
}

export async function fetchForProApi_home(): Promise<IFOrProApi_home> {
    const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/home`)
    return await response.json()
}

export async function fetchForProApi_blogLastArticles(): Promise<_AsyncData<IForPro_blogLastArticlesInAllSections, FetchError<any> | null>> {
    return useFetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/blog`)
}

export async function fetchForProApi_blogArticle(slug: string): Promise<IForPro_blogArticle> {
    const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/api-v2/blog/article/${slug}`)
    return await response.json()
}
