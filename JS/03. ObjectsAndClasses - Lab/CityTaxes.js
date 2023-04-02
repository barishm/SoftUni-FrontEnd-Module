function cityTaxes(name,population,treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury = Math.ceil(this.treasury + this.population * this.taxRate); 
        },
        applyGrowth(percentage) {
            this.population = Math.ceil(this.population + this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury = Math.ceil(this.treasury - this.treasury * percentage);
        }
    }
    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);