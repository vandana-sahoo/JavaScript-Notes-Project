// detailed user object example--
const user = {
    id: 12345,  // Unique identifier
    username: "johndoe",
    email: "johndoe@example.com",
    password: "hashed_password_here", // Typically hashed in real applications
    isVerified: true, // Whether the user is verified or not
    profile: {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-05-15",
      gender: "Male",
      bio: "Full-stack developer with a passion for technology.",
      profilePicture: "https://example.com/images/johndoe.jpg",
      location: {
        city: "San Francisco",
        state: "California",
        country: "USA",
        postalCode: "94103"
      }
    },
    contact: {
      phone: "+1-123-456-7890",
      alternateEmail: "alt_email@example.com"
    },
    preferences: {
      language: "English",
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    },
    accountStatus: {
      isActive: true,
      lastLogin: "2024-11-09T14:30:00Z",
      createdAt: "2020-06-10T12:00:00Z",
      updatedAt: "2024-11-09T14:35:00Z"
    },
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "Twitter", url: "https://twitter.com/johndoe" },
      { platform: "GitHub", url: "https://github.com/johndoe" }
    ],
    roles: ["User", "Admin"], // Array of roles the user has
    settings: {
      privacy: {
        profileVisibility: "Friends", // Public, Friends, Private
        searchEngineIndexing: false
      },
      security: {
        twoFactorAuthEnabled: true,
        recoveryEmail: "recovery_email@example.com"
      }
    },
    subscription: {
      plan: "Premium",
      renewalDate: "2025-01-10",
      paymentMethod: {
        type: "Credit Card",
        lastFourDigits: "1234",
        billingAddress: {
          street: "123 Main St",
          city: "San Francisco",
          state: "California",
          postalCode: "94103",
          country: "USA"
        }
      },
      transactionHistory: [
        { transactionId: "txn_01", amount: 29.99, date: "2024-10-10" },
        { transactionId: "txn_02", amount: 29.99, date: "2024-09-10" }
      ]
    },
    recentActivities: [
      { type: "login", timestamp: "2024-11-09T14:30:00Z" },
      { type: "post", timestamp: "2024-11-05T09:15:00Z", details: "Posted a new article" },
      { type: "comment", timestamp: "2024-11-04T08:22:00Z", details: "Commented on an article" }
    ],
    bookmarks: [
      { id: 101, title: "JavaScript Tips", url: "https://example.com/js-tips" },
      { id: 102, title: "React Hooks Guide", url: "https://example.com/react-hooks" }
    ],
    friends: [
      { id: 201, username: "janesmith", fullName: "Jane Smith" },
      { id: 202, username: "michaeljohnson", fullName: "Michael Johnson" }
    ],
    groups: [
      { id: 301, name: "JavaScript Enthusiasts" },
      { id: 302, name: "Full-Stack Developers" }
    ],
    badges: [
      { name: "Top Contributor", earnedDate: "2023-09-01" },
      { name: "Community Helper", earnedDate: "2024-03-15" }
    ]
  };
  



//destructuring happen here--for object
let {firstName} = user.profile;
console.log(firstName);

let {city} = user.profile.location;
console.log(city);

let {phone} = user.contact;
console.log(phone);

//for array
let [first,second] = user.roles;
console.log(second);

let [firstlink,secondlink] = user.socialLinks;
console.log(firstlink,secondlink);