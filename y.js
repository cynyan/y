// id function
const id = x => x;

// factorial function to be consumed by fixed point combinator.
// functions to be 'consumed' by y must be curried and take a continuation
// as their first argument
const fact = f => n => {
    return (
	(n === 1) ? 1 : n * f(n-1)
    );
};

// y (these are all z really) combinator in 1337 h/-\|<3r form
const y = f => (fp => f(a => (fp(fp))(a)))(fp => f(a => (fp(fp))(a)));

// again, but now with the "repeater" functions aliased
const z = (f) => {
    const f1 = (x) => f(a => (x(x))(a));
    const f2 = (x) => f(a => (x(x))(a));

    return f1(f2);
};

// now with no white space spared, for readability
const combinator = stepper => {
    return (
	(function (nextStep) {
	    return (
		stepper(function(arg) {
		    return(
			(nextStep(nextStep))(arg)
		    );
		})
	    );
	})
	(function(nextStep) {
	    return (
		stepper(function(arg) {
		    return(
			(nextStep(nextStep))(arg)
		    );
		})
	    );
	})
    );
};
