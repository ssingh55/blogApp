export default
    {
        createBlogItem: (blog) => {
            return {
                type: 'ADD_BLOG',
                data: blog
            }
        },
        editBlogItem: (blog) => {
            return {
                type: 'EDIT_BLOG',
                data: blog
            }
        }
    }
