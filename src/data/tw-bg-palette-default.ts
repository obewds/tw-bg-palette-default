interface DefaultTwBgPaletteInterface {
    [key: string]: {
        colors: {
            [key: string]: string
        }
    };
}

export default <DefaultTwBgPaletteInterface>{
    'console': {
        colors: {
            'default': '',
            'error': 'text-white bg-rose-500 dark:bg-rose-600',
            'primary': 'text-white bg-blue-500 dark:bg-blue-600',
            'secondary': 'text-white bg-violet-500 dark:bg-violet-600',
            'success': 'text-white bg-green-500 dark:bg-green-600',
        },
    },
}
