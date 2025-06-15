export const profile = {
	fullName: 'Elia Gonzato',
	title: 'PhD student',
	institute: 'UMC Amsterdam',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Biostatistics', description: 'Brief description of the research interest fffffffffffffffffffv ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhh', field: 'biostatistics' }, { title: 'Biostatistics', description: 'Brief description of the research interest fffffffffffffffffffv ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhh', field: 'biostatistics' }, { title: 'Biostatistics', description: 'Brief description of the research interest fffffffffffffffffffv ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhh', field: 'biostatistics' }, { title: 'Biostatistics', description: 'Brief description of the research interest fffffffffffffffffffv ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhh', field: 'biostatistics' }, { title: 'Biostatistics', description: 'Brief description of the research interest fffffffffffffffffffv ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhh', field: 'biostatistics' }
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'elia.gonzato@outlook.it',
	linkedin: 'https://www.linkedin.com/in/elia-gonzato',
	x: 'https://www.x.com/',
	github: 'https://github.com/egonzato'
}

export const template = {
	website_url: 'https://egonzato.github.io/PortfolioSetUp/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/PortfolioSetUp/' // Repository name starting with /
}

export const seo = {
	default_title: 'Elia Gonzato',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
