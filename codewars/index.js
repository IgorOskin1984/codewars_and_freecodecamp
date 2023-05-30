function DNAStrand(dna) {
	dna = dna.toUpperCase().split('');
	dna = dna.map((char) => {
		switch (char) {
			case 'A':
				return char = 'T'
			case 'T':
				return char = 'A'
			case 'C':
				return char = 'G'
			case 'G':
				return char = 'C'
			default:
				return char;
		}

	})
	return dna.join('');
}

DNAStrand('GTAT')

//*codewars
//function DNAStrand(dna) {
//  return dna.replace(/./g, function(c) {
//    return DNAStrand.pairs[c]
//  })
//}

//DNAStrand.pairs = {
//  A: 'T',
//  T: 'A',
//  C: 'G',
//  G: 'C',
//}