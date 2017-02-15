const request = require('supertest');
const { expect } = require('chai');
const server = require('../server');
const statusCodes = require('../data/status-codes.json');

describe('Status codes API', () => {

	it('has a \'/code/:code\' route', () => {
		return request(server)
			.get('/code/200')
			.expect(200);
	});

	it('returns the correct data from the \'statusCodes\' array', () => {
		const status = statusCodes[Math.floor(Math.random() * statusCodes.length)];
		return request(server)
			.get(`/code/${status.code}`)
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				expect(res.body).to.eql(status);
			});
	});

	describe('Homework', () => {

		it('has a \'/code\' route', () => {
			const codesWithImages = statusCodes.map(({ code, phrase }) => (
				{ code, phrase, image: `https://http.cat/${code}.jpg` }
			));
			return request(server)
				.get('/code')
				.expect(200)
				.expect('Content-type', /json/)
				.expect(res => {
					expect(res.body).to.eql(codesWithImages);
				});
		});
	});

});
