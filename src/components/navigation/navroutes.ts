interface INavRoute {
    title: string
    path: string
}

export const navRoutes: INavRoute[] = [
    {
        title: 'Blog',
        path: 'blog',
    },
    {
        title: 'Food Way',
        path: 'foodway',
    },
    {
        title: 'Recipes',
        path: 'recipes',
    },
    {
        title: 'Vegetarianism',
        path: 'vegetarianism',
    },
    {
        title: 'Starvation',
        path: 'starvation',
    },
    {
        title: 'Medicine',
        path: 'medicine',
    },
    {
        title: 'About',
        path: 'about',
    },
    {
        title: 'Logout',
        path: 'logout',
    },
]
