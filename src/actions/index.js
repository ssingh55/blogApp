export default
    {
        createBlogItem: (blog) => {
            return {
                type: 'ADD_BLOG',
                data: blog
            }
        }
    }