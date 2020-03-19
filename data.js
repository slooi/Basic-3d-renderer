
const position = [
	//	X		Y	
	// COLUMN
		// near
		0,	0,0,
		30, 0,0,
		30, 150,0,
		30, 150,0,
		0, 150,0,
		0,	0,0,
		// far
		0,	0,		30,
		30, 150,	30,
		30, 0,		30,
		0, 150,		30,
		30, 150,	30,
		0,	0,		30,
		// top (extends to top of top-bar)
		0,	150,	0,
		60,	150,	0,
		60,	150,	30,
		60, 150,	30,
		0,	150,	30,
		0,	150,	0,
		// bottom
		0,	0,	0,
		30,	0,	30,
		30,	0,	0,
		30,	0,	30,
		0,	0,	0,
		0,	0,	30,
		// left
		0,	0,	0,
		0,	150,	0,
		0,	150,	30,
		0,	150,	30,
		0,	0,	30,
		0,	0,	0,
		// right
		30,	0,		0,
		30, 0, 		30,
		30,	150,	30,
		30,	150,	30,
		30,	150,	0,
		30,	0,		0,
	// top-bar
		// near
		30,120,0,
		60,120,0,
		60,150,0,
		60,150,0,
		30,150,0,
		30,120,0,
		// far
		30,120,		30,
		60,150,		30,
		60,120,		30,
		30,150,		30,
		60,150,		30,
		30,120,		30,
		// right
		60,120, 	0,
		60,120,		30,
		60,150,		30,
		60,150,		30,
		60,150,		0,
		60,120,		0,
		// bottom
		30,120,		0,
		30,120,		30,
		60,120,		30,
		60,120,		30,
		60,120,		0,
		30,120,		0,
	// bottom-bar
		// near
		30,	60,0,
		60, 60,0,
		60, 90,0,
		60,	90,0,
		30,	90,0,
		30,	60,0,
		// far
		30,	60,		30,
		60, 90,		30,
		60, 60,		30,
		60,	90,		30,
		30,	60,		30,
		30,	90,		30,
		// top
		30,	90,		0,
		60,90,		0,
		60,90,		30,
		60,90,		30,
		30,90,		30,
		30,	90,		0,
		// right
		60,	60,		0,
		60,	60,		30,
		60,	90,		30,
		60,	90,		30,
		60,	90,		0,
		60,	60,		0,
		// bottom
		30,	60,	0,
		30,	60,	30,
		60,	60,	30,
		60,	60,	30,
		60,	60,	0,
		30,	60,	0
]

const colors = [
	//	R  G  B
	// COLUMN
		// near
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		// far
		0,1,0,
		0,1,0,
		0,1,0,
		0,1,0,
		0,1,0,
		0,1,0,
		// top (extends to top of top-bar)
		0,1,1,
		0,1,1,
		0,1,1,
		0,1,1,
		0,1,1,
		0,1,1,
		// bottom
		1,0,0,
		1,0,0,
		1,0,0,
		1,0,0,
		1,0,0,
		1,0,0,
		// left
		1,0,1,
		1,0,1,
		1,0,1,
		1,0,1,
		1,0,1,
		1,0,1,
		// right
		1,1,0,
		1,1,0,
		1,1,0,
		1,1,0,
		1,1,0,
		1,1,0,
	// top-bar
		// near
		1,1,1,
		1,1,1,
		1,1,1,
		1,1,1,
		1,1,1,
		1,1,1,
		// far
		0.3,0.4,0.8,
		0.3,0.4,0.8,
		0.3,0.4,0.8,
		0.3,0.4,0.8,
		0.3,0.4,0.8,
		0.3,0.4,0.8,
		// right
		0.3,0.8,0.4,
		0.3,0.8,0.4,
		0.3,0.8,0.4,
		0.3,0.8,0.4,
		0.3,0.8,0.4,
		0.3,0.8,0.4,
		// bottom
		0.4,0.8,0.3,
		0.4,0.8,0.3,
		0.4,0.8,0.3,
		0.4,0.8,0.3,
		0.4,0.8,0.3,
		0.4,0.8,0.3,
	// bottom-bar
		// near
		0.4,0.3,0.8,
		0.4,0.3,0.8,
		0.4,0.3,0.8,
		0.4,0.3,0.8,
		0.4,0.3,0.8,
		0.4,0.3,0.8,
		// far
		0.8,0.3,0.4,
		0.8,0.3,0.4,
		0.8,0.3,0.4,
		0.8,0.3,0.4,
		0.8,0.3,0.4,
		0.8,0.3,0.4,
		// top
		0.8,0.4,0.3,
		0.8,0.4,0.3,
		0.8,0.4,0.3,
		0.8,0.4,0.3,
		0.8,0.4,0.3,
		0.8,0.4,0.3,
		// right
		0.2,0.8,0.7,
		0.2,0.8,0.7,
		0.2,0.8,0.7,
		0.2,0.8,0.7,
		0.2,0.8,0.7,
		0.2,0.8,0.7,
		// bottom
		0.7,0.2,0.8,
		0.7,0.2,0.8,
		0.7,0.2,0.8,
		0.7,0.2,0.8,
		0.7,0.2,0.8,
		0.7,0.2,0.8,
]