# Music Data App

An application built using Next.js, Express.js, and PostgreSQL, showcasing top artists, albums, and song lyrics from Musixmatch API.

## Features

- User authentication using JWT.
- Display top 25 artists.
- Show a list of albums per artist.
- Display song lyrics, handling special characters like '\n' for a better user experience.
- Responsive design with a modern UI.

## Prerequisites

- [Next.js 13](https://nextjs.org/docs/getting-started/installation)

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LightningDev/music-data-site.git
   ```

2. **Navigate to the project directory and install dependencies:**

   ```bash
   cd music-data-site
   npm install
   ```

3. **Setup Environment Variables:**

   - Rename `.env.local.example` to `.env.local`.
   - Fill in the required variables such as `API_URL`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss the changes you'd like to make.

## License

This project is licensed under the MIT License.
