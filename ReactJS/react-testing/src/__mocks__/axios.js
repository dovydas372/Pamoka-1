const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Tomas",
          last: "Tomasukas",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "Tomukas",
        },
      },
      {
        name: {
          first: "Tomas",
          last: "Tomasukas",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "Tomukas",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
