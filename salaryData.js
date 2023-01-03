let salaryData = [{"Department":"Cabinet Office","Grade":"AO","Salary":21722,"Weekly":417.7307692308,"Daily":83.5461538462,"Hr":11.29002079,"Min":0.1881670132,"Sec":0.0031361169},{"Department":"Cabinet Office","Grade":"EO","Salary":24327,"Weekly":467.8269230769,"Daily":93.5653846154,"Hr":12.643970894,"Min":0.2107328482,"Sec":0.0035122141},{"Department":"Cabinet Office","Grade":"AO (L)","Salary":25277,"Weekly":486.0961538462,"Daily":97.2192307692,"Hr":13.1377338877,"Min":0.2189622315,"Sec":0.0036493705},{"Department":"Cabinet Office","Grade":"Fast Stream","Salary":28000,"Weekly":538.4615384615,"Daily":107.6923076923,"Hr":14.553014553,"Min":0.2425502426,"Sec":0.004042504},{"Department":"Cabinet Office","Grade":"EO (L)","Salary":28050,"Weekly":539.4230769231,"Daily":107.8846153846,"Hr":14.579002079,"Min":0.242983368,"Sec":0.0040497228},{"Department":"Cabinet Office","Grade":"HEO","Salary":32640,"Weekly":627.6923076923,"Daily":125.5384615385,"Hr":16.9646569647,"Min":0.2827442827,"Sec":0.0047124047},{"Department":"Cabinet Office","Grade":"HEO (L)","Salary":35241,"Weekly":677.7115384615,"Daily":135.5423076923,"Hr":18.3165280665,"Min":0.3052754678,"Sec":0.0050879245},{"Department":"Cabinet Office","Grade":"SEO","Salary":38046,"Weekly":731.6538461538,"Daily":146.3307692308,"Hr":19.7744282744,"Min":0.3295738046,"Sec":0.0054928967},{"Department":"Cabinet Office","Grade":"SEO (L)","Salary":41412,"Weekly":796.3846153846,"Daily":159.2769230769,"Hr":21.5239085239,"Min":0.3587318087,"Sec":0.0059788635},{"Department":"Cabinet Office","Grade":"G7","Salary":50694,"Weekly":974.8846153846,"Daily":194.9769230769,"Hr":26.3482328482,"Min":0.4391372141,"Sec":0.0073189536},{"Department":"Cabinet Office","Grade":"G7 (L)","Salary":55794,"Weekly":1072.9615384615,"Daily":214.5923076923,"Hr":28.998960499,"Min":0.4833160083,"Sec":0.0080552668},{"Department":"Cabinet Office","Grade":"G6","Salary":61710,"Weekly":1186.7307692308,"Daily":237.3461538462,"Hr":32.0738045738,"Min":0.5345634096,"Sec":0.0089093902},{"Department":"Cabinet Office","Grade":"G6 (L)","Salary":65790,"Weekly":1265.1923076923,"Daily":253.0384615385,"Hr":34.1943866944,"Min":0.5699064449,"Sec":0.0094984407},{"Department":"Cabinet Office","Grade":"DD","Salary":73000,"Weekly":1403.8461538462,"Daily":280.7692307692,"Hr":37.9417879418,"Min":0.6323631324,"Sec":0.0105393855},{"Department":"Cabinet Office","Grade":"D","Salary":95000,"Weekly":1826.9230769231,"Daily":365.3846153846,"Hr":49.3762993763,"Min":0.8229383229,"Sec":0.0137156387},{"Department":"Cabinet Office","Grade":"DG","Salary":125000,"Weekly":2403.8461538462,"Daily":480.7692307692,"Hr":64.9688149688,"Min":1.0828135828,"Sec":0.018046893},{"Department":"Cabinet Office","Grade":"Perm Sec","Salary":200000,"Weekly":3846.1538461538,"Daily":769.2307692308,"Hr":103.9501039501,"Min":1.7325017325,"Sec":0.0288750289},{"Department":"NHS","Grade":"Band 1","Salary":20270,"Weekly":389.8076923077,"Daily":77.9615384615,"Hr":10.5353430353,"Min":0.1755890506,"Sec":0.0029264842},{"Department":"NHS","Grade":"Band 2","Salary":20270,"Weekly":389.8076923077,"Daily":77.9615384615,"Hr":10.5353430353,"Min":0.1755890506,"Sec":0.0029264842},{"Department":"NHS","Grade":"Band 3","Salary":21730,"Weekly":417.8846153846,"Daily":83.5769230769,"Hr":11.2941787942,"Min":0.1882363132,"Sec":0.0031372719},{"Department":"NHS","Grade":"Band 4","Salary":23949,"Weekly":460.5576923077,"Daily":92.1115384615,"Hr":12.4475051975,"Min":0.20745842,"Sec":0.0034576403},{"Department":"NHS","Grade":"Band 5","Salary":27055,"Weekly":520.2884615385,"Daily":104.0576923077,"Hr":14.0618503119,"Min":0.2343641719,"Sec":0.0039060695},{"Department":"NHS","Grade":"Band 6","Salary":33706,"Weekly":648.1923076923,"Daily":129.6384615385,"Hr":17.5187110187,"Min":0.291978517,"Sec":0.0048663086},{"Department":"NHS","Grade":"Band 7","Salary":41659,"Weekly":801.1346153846,"Daily":160.2269230769,"Hr":21.6522869023,"Min":0.3608714484,"Sec":0.0060145241},{"Department":"NHS","Grade":"Band 8a","Salary":48526,"Weekly":933.1923076923,"Daily":186.6384615385,"Hr":25.2214137214,"Min":0.4203568954,"Sec":0.0070059483},{"Department":"NHS","Grade":"Band 8b","Salary":56164,"Weekly":1080.0769230769,"Daily":216.0153846154,"Hr":29.1912681913,"Min":0.4865211365,"Sec":0.0081086856},{"Department":"NHS","Grade":"Band 8c","Salary":67064,"Weekly":1289.6923076923,"Daily":257.9384615385,"Hr":34.8565488565,"Min":0.5809424809,"Sec":0.0096823747},{"Department":"NHS","Grade":"Band 8d","Salary":79592,"Weekly":1530.6153846154,"Daily":306.1230769231,"Hr":41.367983368,"Min":0.6894663895,"Sec":0.0114911065},{"Department":"NHS","Grade":"Band 9","Salary":95135,"Weekly":1829.5192307692,"Daily":365.9038461538,"Hr":49.4464656965,"Min":0.8241077616,"Sec":0.0137351294},{"Department":"Contractor","Grade":"\u00a3400 Day Rate","Salary":104000,"Weekly":2000.0,"Daily":400.0,"Hr":54.0540540541,"Min":0.9009009009,"Sec":0.015015015},{"Department":"Contractor","Grade":"\u00a3500 Day Rate","Salary":130000,"Weekly":2500.0,"Daily":500.0,"Hr":67.5675675676,"Min":1.1261261261,"Sec":0.0187687688},{"Department":"Contractor","Grade":"\u00a3600 Day Rate","Salary":156000,"Weekly":3000.0,"Daily":600.0,"Hr":81.0810810811,"Min":1.3513513514,"Sec":0.0225225225},{"Department":"Contractor","Grade":"\u00a3700 Day Rate","Salary":182000,"Weekly":3500.0,"Daily":700.0,"Hr":94.5945945946,"Min":1.5765765766,"Sec":0.0262762763},{"Department":"Contractor","Grade":"\u00a3800 Day Rate","Salary":208000,"Weekly":4000.0,"Daily":800.0,"Hr":108.1081081081,"Min":1.8018018018,"Sec":0.03003003},{"Department":"Contractor","Grade":"\u00a3900 Day Rate","Salary":234000,"Weekly":4500.0,"Daily":900.0,"Hr":121.6216216216,"Min":2.027027027,"Sec":0.0337837838},{"Department":"Contractor","Grade":"\u00a31000 Day Rate","Salary":260000,"Weekly":5000.0,"Daily":1000.0,"Hr":135.1351351351,"Min":2.2522522523,"Sec":0.0375375375},{"Department":"National Medium Salary","Grade":"18 to 21","Salary":18597,"Weekly":357.6346153846,"Daily":71.5269230769,"Hr":9.6658004158,"Min":0.1610966736,"Sec":0.0026849446},{"Department":"National Medium Salary","Grade":"22 to 29","Salary":27492,"Weekly":528.6923076923,"Daily":105.7384615385,"Hr":14.288981289,"Min":0.2381496881,"Sec":0.0039691615},{"Department":"National Medium Salary","Grade":"30 to 39","Salary":34306,"Weekly":659.7307692308,"Daily":131.9461538462,"Hr":17.8305613306,"Min":0.2971760222,"Sec":0.0049529337},{"Department":"National Medium Salary","Grade":"40 to 49","Salary":36961,"Weekly":710.7884615385,"Daily":142.1576923077,"Hr":19.2104989605,"Min":0.3201749827,"Sec":0.0053362497},{"Department":"National Medium Salary","Grade":"50 to 59","Salary":34809,"Weekly":669.4038461538,"Daily":133.8807692308,"Hr":18.091995842,"Min":0.301533264,"Sec":0.0050255544},{"Department":"National Medium Salary","Grade":"60 and over","Salary":30468,"Weekly":585.9230769231,"Daily":117.1846153846,"Hr":15.8357588358,"Min":0.2639293139,"Sec":0.0043988219},{"Department":"National Medium Salary","Grade":"All Ages","Salary":33000,"Weekly":634.6153846154,"Daily":126.9230769231,"Hr":17.1517671518,"Min":0.2858627859,"Sec":0.0047643798}]