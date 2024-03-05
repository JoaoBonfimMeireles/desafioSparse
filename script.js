// usando o forEash e map// ele percorre o array e trás o valor das pesquisar do queries feitas na strings (somente o valor da pesquisa mesmo) 

function matchingStrings(strings, queries) {
    const occurrenceCount = {};
    
    queries.forEach(query => occurrenceCount[query] = 0);

    strings.forEach(string => {
        if (occurrenceCount.hasOwnProperty(string)) {
            occurrenceCount[string]++;
        }
    });
    return queries.map(query => occurrenceCount[query]);
    
    console.log(occurrenceCount)
}
