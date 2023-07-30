class Logger {
	constructor(){
		this.logs = []
	}

	get count(){
		return this.logs.length;
	}

	log(message) {
		const timestamp = new Date().toISOString()
		this.log.push({message , timestamp});
		logger.log(`${timestamp} ---- ${message}`)
	}
}

export default Logger