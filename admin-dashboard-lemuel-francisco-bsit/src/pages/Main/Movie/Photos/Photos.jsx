import React, { useState, useEffect } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photoFile: null
  });

  useEffect(() => {
    // Fetch current photo data from an API or local storage
    // Example: setPhotos(fetchedData);
  }, []);

  const handleAddPhoto = () => {
    // Add new photo logic (API call or local state update)
    const newPhoto = {
      id: Date.now(), // Generate a unique ID for the new photo
      ...formData
    };
    setPhotos([...photos, newPhoto]);
    setFormData({ title: '', description: '', photoFile: null });
  };

  const handleEditPhoto = (id) => {
    const photoToEdit = photos.find(photo => photo.id === id);
    setSelectedPhoto(photoToEdit);
    setFormData({
      title: photoToEdit.title,
      description: photoToEdit.description,
      photoFile: photoToEdit.photoFile
    });
  };

  const handleUpdatePhoto = () => {
    // Update the selected photo (API call or local state update)
    setPhotos(photos.map(photo =>
      photo.id === selectedPhoto.id ? { ...photo, ...formData } : photo
    ));
    setSelectedPhoto(null);
    setFormData({ title: '', description: '', photoFile: null });
  };

  const handleDeletePhoto = (id) => {
    // Delete logic (API call or local state update)
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div>
      <h1>Photo Management</h1>

      {/* Add New Photo Form */}
      <div>
        <h2>{selectedPhoto ? 'Edit Photo' : 'Add New Photo'}</h2>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Photo Title"
        />
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, photoFile: e.target.files[0] })}
        />
        <button onClick={selectedPhoto ? handleUpdatePhoto : handleAddPhoto}>
          {selectedPhoto ? 'Update Photo' : 'Add Photo'}
        </button>
      </div>

      {/* Photo List */}
      <div>
        <h2>Photo List</h2>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <div>
                <strong>{photo.title}</strong> - {photo.description}
                <div>
                  {/* Display photo thumbnail if available */}
                  {photo.photoFile && (
                    <img 
                      src={URL.createObjectURL(photo.photoFile)} 
                      alt={photo.title} 
                      width="100" 
                      height="100" 
                    />
                  )}
                  {!photo.photoFile && <span>No Image</span>}
                </div>
                <button onClick={() => handleEditPhoto(photo.id)}>Edit</button>
                <button onClick={() => handleDeletePhoto(photo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Photos;
