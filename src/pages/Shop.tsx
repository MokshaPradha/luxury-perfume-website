import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/products';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { motion } from 'motion/react';
import { SlidersHorizontal } from 'lucide-react';

export function Shop() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(true);
  
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const genders = ['men', 'women', 'unisex'];
  
  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesGender = selectedGenders.length === 0 || selectedGenders.includes(product.gender);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesPrice && matchesBrand && matchesGender && matchesCategory;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  
  const toggleFilter = (array: string[], setArray: (val: string[]) => void, value: string) => {
    if (array.includes(value)) {
      setArray(array.filter((item) => item !== value));
    } else {
      setArray([...array, value]);
    }
  };
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
            Luxury Fragrances
          </h1>
          <p className="text-muted-foreground">
            Explore our exquisite collection of premium perfumes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Cormorant'] text-2xl">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
              
              {(showFilters || window.innerWidth >= 1024) && (
                <div className="space-y-8">
                  {/* Price Range */}
                  <div>
                    <Label className="mb-4 block">Price Range</Label>
                    <Slider
                      min={0}
                      max={500}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Brand Filter */}
                  <div>
                    <Label className="mb-4 block">Brand</Label>
                    <div className="space-y-3">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center">
                          <Checkbox
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
                          />
                          <label
                            htmlFor={`brand-${brand}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gender Filter */}
                  <div>
                    <Label className="mb-4 block">Gender</Label>
                    <div className="space-y-3">
                      {genders.map((gender) => (
                        <div key={gender} className="flex items-center">
                          <Checkbox
                            id={`gender-${gender}`}
                            checked={selectedGenders.includes(gender)}
                            onCheckedChange={() => toggleFilter(selectedGenders, setSelectedGenders, gender)}
                          />
                          <label
                            htmlFor={`gender-${gender}`}
                            className="ml-2 text-sm cursor-pointer capitalize"
                          >
                            {gender}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <Label className="mb-4 block">Type</Label>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([0, 500]);
                      setSelectedBrands([]);
                      setSelectedGenders([]);
                      setSelectedCategories([]);
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort & Count */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
