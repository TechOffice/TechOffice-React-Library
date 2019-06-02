export default {
	
	loadState: function(){
		try{
			let state = localStorage.getItem("STATE");
			if (state == null){
				return this.initializeState();
			}
			return JSON.parse(state);
		} catch(err){
			console.log(err);
			return this.initializeState();
		}
	},
	
	saveState: function(state: any){
		try{
			localStorage.setItem("STATE", JSON.stringify(state));
		}catch(err){
			console.log(err);
		}
	},
	
	initializeState: function(){
		return {counter: 1}
	}
	
}