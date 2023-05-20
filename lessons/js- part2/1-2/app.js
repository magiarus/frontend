const text = `Enim aliquip in ea velit culpa esse. Non in nisi exercitation enim tempor nulla. Id laboris adipisicing exercitation incididunt anim. Id labore sunt aliqua duis occaecat aute tempor minim ullamco amet. Voluptate duis non minim nisi. Nisi consectetur magna id.
Eiusmod dolore excepteur dolor mollit enim esse ex veniam eiusmod exercitation. Aute non id pariatur ullamco. Aliquip ut dolore Lorem sit culpa cupidatat. Nostrud proident nisi officia incididunt do magna amet fugiat incididunt amet minim reprehenderit est. Id do cupidatat nostrud velit irure magna duis in. In voluptate sit ipsum aute occaecat qui. Tempor commodo non irure duis ipsum labore nisi.

Ipsum eu ipsum non id velit enim exercitation sint tempor exercitation tempor deserunt amet exercitation. Proident minim reprehenderit labore ea. Sint dolore officia irure consectetur et occaecat est duis quis ut pariatur fugiat.

Laboris reprehenderit cillum adipisicing adipisicing pariatur consectetur nostrud reprehenderit culpa esse. Ex aliqua enim laborum consectetur ut ipsum ut aute reprehenderit veniam. Cillum cillum deserunt proident occaecat ea sit id pariatur id nulla voluptate. Nostrud nisi labore ea magna eu Lorem Lorem ad exercitation eiusmod consequat. Aliqua elit cupidatat elit excepteur aliquip. Dolore incididunt commodo enim sit deserunt magna.

Et consectetur in irure ex do qui. Occaecat sint mollit do ex occaecat veniam amet. Pariatur exercitation duis exercitation aliquip pariatur ea.`


 const reger = /esse/g;
 const isValid = reger.test(text);

 const esseFromText = text.match(reger);
 console.log(isValid, esseFromText);

 const someLetterFromText = text.match(/\w\w\w\w/g);
 console.log(someLetterFromText);

 const allWordsFromText = text.match(/\w+/g);
 console.log(allWordsFromText);

 const digitsFromText = text.match(/\d+/g);
 console.log(digitsFromText);

 const resultText = "Hello world".replace(/\w\w\w\w/g,"Tima")
 console.log(resultText);

 const secretFromText = text.match(/\[(.+)\]/);
 console.log(secretFromText, secretFromText [1]);