import female from "../assets/images/female.jpeg";
import male from "../assets/images/male.jpeg";

const appData = [
  { id: 1, name: "Anil Kumar", place: "Hyderabad",education: "MCA", mobile: "9876543210", email: "anil.kumar@example.com",experience:9, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 2, name: "Rajesh Ram", place: "Chennai",education: "B.Tech", mobile: "9345678910", email: "rajesh.Ram@example.com",experience:6, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 3, name: "Srinivas G", place: "Bangalore",education: "M.B.A", mobile: "9123456789", email: "srinivas.g@example.com",experience:4, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 4, name: "Ravi Kumar", place: "Hyderabad",education: "BCA", mobile: "9234567890", email: "ravi.kumar@example.com",experience: 1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 5, name: "Priya Hari", place: "Hyderabad",education: "MCA", mobile: "9876543210", email: "priya.hari@example.com",experience: 7, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 6, name: "Sandeep Kumar", place: "Chennai",education: "M.B.A", mobile: "9988776655", email: "sandeep.kumar@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 7, name: "Deepa S", place: "Bangalore",education: "B.Sc", mobile: "9345678910", email: "deepa.s@example.com",experience:3, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 8, name: "Naveen Kumar", place: "Hyderabad",education: "M.Tech", mobile: "9123456789", email: "naveen.kumar@example.com",experience: 1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 9, name: "Meera P", place: "Chennai",education: "B.Tech", mobile: "9876543210", email: "meera.p@example.com",experience: 9, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 10, name: "Vijay Kumar", place: "Hyderabad",education: "MCA", mobile: "9123456789", email: "vijay.kumar@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 11, name: "Amit Ram", place: "Bangalore",education: "M.B.A", mobile: "9234567890", email: "amit.Ram@example.com",experience:6, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 12, name: "Shruti Ram", place: "Chennai",education: "B.Sc", mobile: "9345678910", email: "shruti.Ram@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 13, name: "Ravi Kumar", place: "Hyderabad",education: "M.Tech", mobile: "9988776655", email: "ravi.kumar2@example.com",experience:7, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 14, name: "Priya Sharma", place: "Bangalore",education: "MCA", mobile: "9123456789", email: "priya.sharma@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 15, name: "Manoj Ram", place: "Chennai",education: "B.Tech", mobile: "9345678910", email: "manoj.Ram@example.com",experience:6, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 16, name: "Sumanth K", place: "Hyderabad",education: "B.Tech", mobile: "9988776655", email: "sumanth.k@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 17, name: "Akhil Ram", place: "Hyderabad",education: "MCA", mobile: "9876543210", email: "akhil.Ram@example.com",experience:7, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 18, name: "Chandu Hari", place: "Bangalore",education: "M.B.A", mobile: "9234567890", email: "chandu.p@example.com",experience:3, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 19, name: "Karthik N", place: "Hyderabad",education: "B.Tech", mobile: "9123456789", email: "karthik.n@example.com",experience:5, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 20, name: "Geetha S", place: "Chennai",education: "MCA", mobile: "9988776655", email: "geetha.s@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 21, name: "Vinod Kumar", place: "Hyderabad",education: "B.Tech", mobile: "9234567890", email: "vinod.kumar@example.com",experience:6, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 22, name: "Jayanthi M", place: "Bangalore",education: "MCA", mobile: "9876543210", email: "jayanthi.m@example.com",experience:4, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 23, name: "Srikant G", place: "Hyderabad",education: "M.B.A", mobile: "9123456789", email: "srikant.g@example.com",experience:5, role: "Data Analyst", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 24, name: "Shalini P", place: "Chennai",education: "B.Sc", mobile: "9345678910", email: "shalini.p@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 25, name: "Arvind R", place: "Hyderabad",education: "B.Tech", mobile: "9988776655", email: "arvind.r@example.com",experience:7, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 26, name: "Priya S", place: "Bangalore",education: "M.Tech", mobile: "9876543210", email: "priya.s@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 27, name: "Rahul K", place: "Chennai",education: "B.E", mobile: "9123456789", email: "rahul.k@example.com",experience:4, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 28, name: "Sneha P", place: "Mumbai",education: "MBA", mobile: "9988776654", email: "sneha.p@example.com",experience:6, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 29, name: "Vikram T", place: "Delhi",education: "B.Tech", mobile: "9988776643", email: "vikram.t@example.com",experience:8, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 30, name: "Anjali M", place: "Pune",education: "B.Sc", mobile: "9988776632", email: "anjali.m@example.com",experience:9, role: "Sr Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 31, name: "Suresh N", place: "Hyderabad",education: "B.Com", mobile: "9988776621", email: "suresh.n@example.com",experience:6, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 32, name: "Neha R", place: "Ahmedabad",education: "BBA", mobile: "9988776610", email: "neha.r@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 33, name: "Karan J", place: "Kolkata",education: "B.Tech", mobile: "9988776609", email: "karan.j@example.com",experience:4, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 34, name: "Riya D", place: "Jaipur",education: "MCA", mobile: "9988776598", email: "riya.d@example.com",experience:4, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 35, name: "Ajay V", place: "Lucknow",education: "B.Tech", mobile: "9988776587", email: "ajay.v@example.com",experience:6, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 36, name: "Tina G", place: "Indore",education: "B.Com", mobile: "9988776576", email: "tina.g@example.com",experience:5, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 37, name: "Manoj H", place: "Coimbatore",education: "B.E", mobile: "9988776565", email: "manoj.h@example.com",experience:6, role: "Consultant", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 38, name: "Sonia F", place: "Visakhapatnam",education: "MBA", mobile: "9988776554", email: "sonia.f@example.com",experience: 1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: female },
  { id: 39, name: "R avi K", place: "Nashik",education: "B.Tech", mobile: "9988776543", email: "ravi.k@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: male },
  { id: 40, name: "Pooja L", place: "Surat",education: "B.Sc", mobile: "9988776532", email: "pooja.l@example.com",experience:1, role: "Trainee", isSelected: false, isRejected: false, isBookmarked: false, url: female }  
  ];  

const applicantsData = appData.sort((a, b) => a.name.localeCompare(b.name));


  export default applicantsData;