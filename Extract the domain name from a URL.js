/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */ 

domainName("https://www.github.com/carbonfive/raygun")

function domainName(url){
 if (url.startsWith('http')) {
    let dvdr1 = url.indexOf('/') + 2;
    if (url[dvdr1] == 'w') {
        dvdr1 = dvdr1 + 4;
    }
    let dvdr2 = url.indexOf('.', dvdr1)
    return url.slice(dvdr1, dvdr2)
 } else if (url.startsWith('www')) {
    let dvdr1 = url.indexOf('.') + 1;
    let dvdr2 = url.indexOf('.', dvdr1)
    return url.slice(dvdr1, dvdr2)
 } else {
    let dvdr1 = url.indexOf('.')
    return url.slice(0, dvdr1)
 }
}