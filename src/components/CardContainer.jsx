import React from 'react'

export const CardContainer = () => {
    const services = [
        {
            title: "Article Generator",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        },
        {
            title: "Blog Post Writer",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        },
        {
            title: "Content Rewriter",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        },
        {
            title: "Image Generator",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        },
        {
            title: "Product Descriptions",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        },
        {
            title: "Social Media Post",
            description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor"
        }
    ];

    return (
        <>
            <div>CardContainer</div>
            {services.map((id, item)=>{
                return <Card item={item}/>
            })}
        </>
    )
}
