export interface Project {
	id: string
	title: string
	desc: string
	stack: string[]
	website?: string
	github: string
	building: boolean
}

export interface HomeProjectCardProps extends Project {}

export interface HyphenProps {
	title: string
	website_link: string
	infos: {
		discord_link: string
		wpp_link: string
		ig_link: string
	}
}