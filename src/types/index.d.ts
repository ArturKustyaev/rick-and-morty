interface Character {
	id: number
	name: string
	status: StatusType
	species: string
	type: string
	gender: GenderType
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: strifg
}

type GenderType = 'Female' | 'Male' | 'Genderless' | 'unknown'

type StatusType = 'Dead' | 'Alive' | 'unknown'

interface Episode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: Date;
}