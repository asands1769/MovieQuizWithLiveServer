export class User {
    name: string;
	score: number;
	id?: string;
	constructor(name: string, score: number){
		this.name = name;
		this.score = score;
	}
}