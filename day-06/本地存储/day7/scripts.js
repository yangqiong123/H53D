var reader = {
			config:{fontSize:16,color:'#333',bgcolor:'#eee'},
			init:function(){
				this.artBody = document.querySelector("section");
				this.iptColor = document.querySelector("input:nth-child(3)");
				this.iptBgColor = document.querySelector("input:nth-child(4)");
				this.resetStyle();
			},
			resetStyle:function(){
				var str = localStorage.getItem("r-config");
				if(!str){
					return;
				}
				this.config = JSON.parse(str);
				this.artBody.style.fontSize = this.config.fontSize+'px';
				this.artBody.style.color = this.config.color;
				this.artBody.style.backgroundColor = this.config.bgcolor;
				this.iptColor.value = this.config.color;
				this.iptBgColor.value = this.config.bgcolor;
			},
			addSize:function(){
				this.config.fontSize++;
				this.artBody.style.fontSize = this.config.fontSize+'px';
				this.saveStorage();
			},
			reduceSize:function(){
				this.config.fontSize--;
				this.artBody.style.fontSize = this.config.fontSize+'px';
				this.saveStorage();
			},
			changeColor:function(){
				var iptColor = this.iptColor.value;
				this.artBody.style.color = iptColor;
				this.config.color = iptColor;
				this.saveStorage();
			},
			changeBgColor:function(){
				var iptColor = this.iptBgColor.value;
				this.artBody.style.backgroundColor = iptColor;
				this.config.bgcolor = iptColor;
				this.saveStorage();
			},
			saveStorage:function(){
				var tmp = JSON.stringify(this.config);
				localStorage.setItem("r-config",tmp);
			}
		}
		reader.init();