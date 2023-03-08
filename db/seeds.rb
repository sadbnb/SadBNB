p "seeding"

p "seeding apartments"
Apartment.create!(
  title: "Spacious 2-Bedroom Apartment in Downtown Los Angeles",
  location: "Los Angeles, California",
  details: "This newly-renovated 2-bedroom apartment is located in the heart of downtown Los Angeles, just steps away from popular restaurants, shops, and entertainment venues. With over 1,000 square feet of living space, this apartment features a modern kitchen, hardwood floors, and large windows that let in plenty of natural light. Residents also have access to a fitness center, rooftop pool, and 24-hour concierge service.",
  main_image: "https://design-middleeast.com/wp-content/uploads/2022/07/220614_EJ_one_wall_0123-_HIGH_RES-1100x734.jpg"
)

Apartment.create!(
  title: "Luxury 1-Bedroom Apartment in the Upper East Side",
  location: "New York, New York",
  details: "This elegant 1-bedroom apartment is located in one of the most prestigious neighborhoods in New York City. Featuring high-end finishes and appliances, this apartment boasts stunning views of Central Park and the city skyline. Building amenities include a 24-hour doorman, fitness center, and rooftop terrace. Residents are also just a short walk away from world-class museums, shops, and restaurants.",
  main_image: "https://design-middleeast.com/wp-content/uploads/2022/07/220614_EJ_one_wall_0465-_HIGH_RES-1100x734.jpg"
)

Apartment.create!(
  title: "Modern Studio Apartment in the Heart of San Francisco",
  location: "San Francisco, California",
  details: "This sleek studio apartment is located in the bustling SoMa neighborhood of San Francisco, just a few blocks away from the city's top tech companies. With stylish furnishings and plenty of natural light, this apartment is the perfect home for a busy professional. Building amenities include a fitness center, laundry facilities, and a rooftop deck with views of the city.",
  main_image: "https://design-middleeast.com/wp-content/uploads/2022/07/2022-06-26-OWS-0015-6463-1100x733.jpghttps://design-middleeast.com/wp-content/uploads/2022/07/2022-06-26-OWS-0015-6463-1100x733.jpg"
)

Apartment.create!(
  title: "Charming 2-Bedroom Apartment in Downtown Boston",
  location: "Boston, Massachusetts",
  details: "This cozy 2-bedroom apartment is located in a historic building in the heart of downtown Boston. With exposed brick walls and hardwood floors, this apartment is full of character and charm. Residents also have access to a private outdoor patio and a fitness center. Plus, the apartment is just steps away from the city's top restaurants, shops, and cultural attractions.",
  main_image: "https://www.sfproperties.com/images/made/images/uploads/property_gallery/2060jacksonPenthouse/_2081240444_773_542_s_c1.jpg"
)

Apartment.create!(
  title: "Bright and Airy 1-Bedroom Apartment in Seattle",
  location: "Seattle, Washington",
  details: "This light-filled 1-bedroom apartment is located in the vibrant Capitol Hill neighborhood of Seattle. With an open floor plan and large windows, this apartment feels spacious and inviting. Building amenities include a rooftop terrace with stunning views of the city and a fitness center. Plus, residents are just a short walk away from the neighborhood's best cafes, shops, and nightlife.",
  main_image: "https://design-middleeast.com/wp-content/uploads/2023/02/Jumeirah-Emirates-Towers-Exterior-Clouds-1100x827.jpg"
)

Apartment.create!(
    title: "Cozy 2-Bedroom Apartment in the Heart of Dubai",
    location: "Dubai",
    details: "This light-filled 1-bedroom apartment is located in the vibrant Dubai. With an open pool, this apartment feels spacious and inviting. Building amenities include a rooftop terrace with stunning views of the city and a fitness center. Plus, residents are just a short walk away from the neighborhood's best cafes, shops, and nightlife.",
    main_image: "https://www.constructionweekonline.com/cloud/2021/07/06/Sky-Collection-Emaar-Addres.jpg"
  )

p "seeding Bookings"

p "seeding Users"
User.create!(
  username: 'sebseb',
  email: 'seb@sebbot.com',
  password: '123'
)

p "done seeding"