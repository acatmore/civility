import {Meteor} from 'meteor/meteor';
import {Homes} from '../api/homes';

Meteor.startup(() => {
	if (Homes.find().count() === 0) {
		const homes = [{
			'name': 'Nerd Cave',
			'description': 'a rickity shack lit by computer glow alone'
		},	{
			'name': 'Bro Pad',
			'description': 'beer-can littered lawn and shirtless men are a beacon to all who wish to party'
		}, {
			'name': 'Young Professional Apartment',
			'description': 'the cleanliness and unified asthetic proclaim "there be adults here"'
		}];

		homes.forEach((home) => {
			Homes.insert(home)
		});
	}
});