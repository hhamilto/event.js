
EventEmitter = {
	eventHash: {},
	on: function(event, func){
		(this.eventHash[event] = this.eventHash[event] || []).push(func)
	},
	emit: function(event){
		var args = Array.prototype.slice.call(arguments, 1)
		!(this.eventHash[event] = this.eventHash[event] || []).forEach(function(fun){
			fun.apply(null, args)
		})
	}
}
