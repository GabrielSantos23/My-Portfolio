export const Query = `*[_type == "projects"] | order(_createdAt desc) {
  
        _id,
        title,
        description,
        about,
        link,
        github,
        technologies,
        technologies2,
        technologies3,
        technologies4,
        imageUrl{
            asset->{
              _id,
              url
            }
          },
        
      } `;
export const Designs = `*[_type == "designs"] | order(_createdAt desc) {
  
        _id,
        title,
        description,
        about,
        link,
        technologies,
        technologies2,
        technologies3,
        technologies4,
        imageUrl{
            asset->{
              _id,
              url
            }
          },
        
      } `;
