const REQUEST_LOGGING = process.env.REQUEST_LOGGING === 'true';
const AUDIO_BUCKET = process.env.AUDIO_BUCKET;
const COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID;
const COGNITO_CLIENT_SECRET = process.env.COGNITO_CLIENT_SECRET;
const COGNITO_POOL_ID = process.env.COGNITO_POOL_ID;
const COGNITO_POOL_REGION = process.env.COGNITO_POOL_REGION;
// https://cloud.google.com/functions/docs/env-var#environment_variables_set_automatically
const GCP_PROJECT = process.env.GCP_PROJECT;
console.log("ENV", process.env);
const SPEECH_TO_TEXT_COST_PER_MINUTE = Number(process.env.SPEECH_TO_TEXT_COST_PER_MINUTE); // dollars per minute

if (Number.isNaN(SPEECH_TO_TEXT_COST_PER_MINUTE)) throw new Error('Bad SPEECH_TO_TEXT_COST_PER_MINUTE variable');

const GET_TOTAL_S2T_JOB_COST = duration => Math.ceil((duration / 60) * SPEECH_TO_TEXT_COST_PER_MINUTE * 100) / 100;

module.exports = {
	REQUEST_LOGGING,
	AUDIO_BUCKET,
	COGNITO_CLIENT_ID,
	COGNITO_CLIENT_SECRET,
	COGNITO_POOL_ID,
	COGNITO_POOL_REGION,
	SPEECH_TO_TEXT_COST_PER_MINUTE,
	GET_TOTAL_S2T_JOB_COST,
	GCP_PROJECT,
};
