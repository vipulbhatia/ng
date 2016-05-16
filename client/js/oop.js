var user = function(name) {
		var name = name;
		var city = "delhi";
		var email = "gmeil.com";
		this.getName = function() {
			return name;
		};
	};
	user.prototype.setName = function(name) {
		name = name;
	};

	var i = new user('lol');
	console.log(i.name);
	console.log(i.getName());
	i.setName();
	var change = function(val) {
		val.x += 1;
	};
	var x = {"x":5};
	change(x);
	console.log(x);

	//linkedlist without OOP
	console.log('value added');
	var root = null;

	function add(d) {
		var n = {};
		n.data = d;
		n.next = null;
		if(root === null) {
			root = n;
		} else {
			curr = root;
			while(curr.next !== null) {
				curr = curr.next;
			}
			curr.next = n;
		}
	}

	function display(root) {
		while(root.next !== null) {
			console.log(root.data);
			root = root.next;
		}
		console.log(root.data);
	}

	add(7);add(8);add(9);add(4);display(root);
	console.log(root);

	//linkedlist with OOP
	console.log('OOP concepts: linkedlist');

	var root = null, curr = null;
	var Node = function(data) {
		var d = data,
		next = null,
		prev = null;

		this.getData = function() {
			return d;
		};

		this.getNext = function() {
			return next;
		};

		this.getPrev = function() {
			return prev;
		};

		this.setData = function(data) {
			d = data;
		};
		
		this.setNext = function(obj) {
			next = obj;
		};

		/* that.setPrev = function() {
			return prev;
		}; */

		this.add = function() {
			if(root === null) root = this;
			else {
				curr = root;
				while(curr.getNext() !== null) {
					curr = curr.getNext();
				}
				curr.setNext(this);
			}
			//console.log(root);
		};

		this.show = function(root) {
			curr = root;
			do {
				console.log(curr.getData());
				curr = curr.getNext();
			} while(curr.getNext() !== null);
			console.log(curr.getData());
		}
	
	};

	//class with private and public members
	var Person = function(name) {
		//declare private variables within object and return only public methods..."that" is returned by default...point "this" to "that"
		//"this" json object is returned by default from any function/class
		var that = this;
		var name = name;
		this.show = function() {
			console.log('Person: ' + name);
		};
	};

	var p = new Person('bob');
	console.log(p.name);
	p.show();

	var n1 = new Node(2);//can use without "new" as well
	var n2 = new Node(5);
	var n3 = new Node(7);
	var n4 = new Node(1);
	n1.add();
	n2.add();
	n3.add();
	n4.add();
	//console.log('here ' + n4.that.d);//undefined as "that" is private
	n4.show(root);