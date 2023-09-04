const data = '[{ "Menu1" : ["Category1", "Category2", "Category3"]}, { "Menu2" : ["Category4", "Category5", "Category6"]}, { "Menu3" : ["Category7", "Category8", "Category9"]}]';

// Parse the JSON data
const parsedData = JSON.parse(data);

// Extract menu titles
const menuTitles: string[] = parsedData.map((menu: { [key: string]: string[] }) => Object.keys(menu)[0]);

console.log(menuTitles);