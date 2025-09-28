const template = '/PortfolioSetUp/'

export const experiences = [
	{
		company: 'UMC Amsterdam',
		time: 'Jan 2025 - Present',
		title: 'PhD Student',
		location: 'Amsterdam, Netherlands',
		description: 'Doing research as a PhD student',
	},
	// {
	// 	company: 'Radium Institute (Institut du Radium)',
	// 	time: '1914 - 1934',
	// 	title: 'Director',
	// 	location: 'Paris, France',
	// 	description: 'Led groundbreaking studies on radioactivity and mentored future Nobel Prize laureates.',
	// },
];

export const education = [
	{
		school: 'University of Milano Bicocca',
		time: '2021 - 2024',
		degree: 'Biostatistics',
		location: 'Milan, Italy',
		description: 'Master\'s degree in Biostatistics',
	},
	{
		school: 'University of Padua',
		time: '2018 - 2021',
		degree: 'Food Science',
		location: 'Vicenza, Italy',
		description: 'Bachelor\'s degree in food science',
	},
	// {
	// 	school: 'University of Paris',
	// 	time: '1891 - 1895',
	// 	degree: 'Master’s in Physics and Mathematics',
	// 	location: 'Paris, France',
	// 	description: 'Graduated at the top of her class in physics and second in mathematics.',
	// },
];

export const skills = [
	{
		title: 'Rabona fake',
		description: 'illuding the opponent with faking a rabona',
	},
	{
		title: 'Rabona fake',
		description: 'illuding the opponent with faking a rabona',
	},
	{
		title: 'Rabona fake',
		description: 'illuding the opponent with faking a rabona',
	},
	{
		title: 'Rabona fake',
		description: 'illuding the opponent with faking a rabona',
	},
	{
		title: 'Rabona fake',
		description: 'illuding the opponent with faking a rabona',
	},
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const news = [
	{
		date: 'October 2025',
		contentHtml: 'Participated to conference Statistics and Biopharmacy in Paris to catch up with the latest developments of statistics in clinical trials for rare diseases'
	},
	{
		date: 'July 2025',
		contentHtml: 'Statistical Analysis Plan for the Guanabenz single arm trial has been published'
	},
	{
		date: 'January 2025',
		contentHtml: 'Joined Amsterdam University Medical Center as a PhD Candidate in Biostatistics. I will be dive into clinical trials in rare diseases, with a specific focus on Vanishing White Matter'
	},
	{
		date: 'April 2024',
		contentHtml: 'Started working as Junior Researcher at Erasmus University Medical Center'
	},
	{
		date: 'February 2024',
		contentHtml: 'Graduated in Biostatistics from University of Milano-Bicocca with my thesis titled ‘Effect of transplant characteristics and of complications on survival outcomes of allogeneic stem cell transplantation: the experience of Stockholm center’'
	},
	{
		date: 'September 2023',
		contentHtml: 'Joined as visiting researcher the department of cell therapy and allogeneic stem cell transplantation at Karolinska Institutet'
	},
	{
		date: 'June 2023',
		contentHtml: 'Participated at Colloquium Chemometricum Mediterraneum with a poster about predicting microbial load on seafood products with near-infrared spectroscopy'
	},
	{
		date: 'April 2023',
		contentHtml: 'Results from the SAS Curiosity Cup have been published, we won the runner-up prize in the data analysis category.'
	}
]

export const publications = [
  {
    title: 'Handling multiple time-varying exposures in survival analysis',
    authors: 'Elia Gonzato',
    journal: '',
    time: '2024',
    contentHtml: '<a href="https://www.nature.com/articles/s41598-025-14849-5" target="_blank" class="text-blue-900 hover:text-accent transition-colors duration-200">Time Varying Exposure</a>',
    abstract: 'This study used paediatric data to compare methods for modeling multiple time-varying exposures in survival analysis. Influenza vaccination estimates were consistent across approaches, while antibiotic use estimates varied. The results highlight the need for careful method selection when handling multiple Time-Varying exposures.',
  },
  {
    title: 'Effect of transplant characteristics and complications (Master Thesis)',
    authors: 'Elia Gonzato',
    journal: '',
    time: '2023',
    contentHtml: '<a href="/PortfolioSetUp/Tesi_di_Gonzato_Elia___889721.pdf" target="_blank" class="text-blue-900 hover:text-accent transition-colors duration-200">Effect of transplant characteristics and complications (Master Thesis)</a>',
    abstract: 'Using data from 674 transplants in Stockholm (2015–2023), researchers assessed how donor type affects survival after haematopoietic stem cell transplantation. Recipients with mismatched related donors had poorer survival compared to those with identical sibling donors. Mediation analysis indicated that graft-versus-host disease only minimally explained these differences. The study underscores the continuing importance of finding compatible donors to improve outcomes.',
  },
  {
    title: 'Smokeless tobacco consumption and non-fatal stroke',
    authors: 'Elia Gonzato',
    journal: '',
    time: '2025',
    contentHtml: '<a href="/PortfolioSetUp/SASNuff.pdf" target="_blank" class="text-blue-900 hover:text-accent transition-colors duration-200">SAS Curiosity Cup paper</a>',
    abstract: 'This paper aims to investigate the association between smokeless tobacco products consumption and non-fatal stroke event, through a cross-sectional study, using the 2020 BRFSS database. We accomplish this task by estimating a logistic model. As the percentage of missing values is significant, multiple imputation is performed and a second logistic regression is carried out. Then, we compare parameters from the two analyses, and comment results',
  }
	// {
	// 	title: 'The Radiation of Uranium Compounds',
	// 	authors: 'Marie Curie',
	// 	journal: 'Comptes Rendus de l’Académie des Sciences',
	// 	time: '1898',
	// 	link: '#',
	// 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	// },
];

export const selectedpublications = [
	{
		image: 'bootvaccine.png',
		contentHtml: '<a href="https://www.nature.com/articles/s41598-025-14849-5" target="_blank" class="text-blue-900 hover:text-accent">Handling multiple time-varying exposures in survival analysis using real-world pediatric data from the pedianet database</a>'
	},
	{
		image: 'tesi.png',
		contentHtml: '<a href="/PortfolioSetUp/Tesi_di_Gonzato_Elia___889721.pdf" target="_blank" class="text-blue-900 hover:text-accent">MSc Thesis</a>'
	},
	{
		image: 'curiosity cup.png',
		contentHtml: '<a href="/PortfolioSetUp/SASNuff.pdf" target="_blank" class="text-blue-900 hover:text-accent">SAS Curiosity Cup paper</a>'
	}
]
