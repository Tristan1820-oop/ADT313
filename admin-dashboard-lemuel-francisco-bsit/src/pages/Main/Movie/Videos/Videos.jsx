import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null
  });

  useEffect(() => {
    // Fetch current video data from API or local storage
    // Example: setVideos(fetchedData);
  }, []);

  const handleAddVideo = () => {
    // Add new video logic (API call or local state update)
    const newVideo = {
      id: Date.now(), // Generate unique ID for the new video
      ...formData
    };
    setVideos([...videos, newVideo]);
    setFormData({ title: '', description: '', videoFile: null, thumbnail: null });
  };

  const handleEditVideo = (id) => {
    const videoToEdit = videos.find(video => video.id === id);
    setSelectedVideo(videoToEdit);
    setFormData({
      title: videoToEdit.title,
      description: videoToEdit.description,
      videoFile: videoToEdit.videoFile,
      thumbnail: videoToEdit.thumbnail
    });
  };

  const handleUpdateVideo = () => {
    // Update the selected video (API call or local state update)
    setVideos(videos.map(video => 
      video.id === selectedVideo.id ? { ...video, ...formData } : video
    ));
    setSelectedVideo(null);
    setFormData({ title: '', description: '', videoFile: null, thumbnail: null });
  };

  const handleDeleteVideo = (id) => {
    // Delete logic (API call or local state update)
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div>
      <h1>Video Management</h1>

      {/* Add New Video Form */}
      <div>
        <h2>{selectedVideo ? 'Edit Video' : 'Add New Video'}</h2>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Video Title"
        />
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, videoFile: e.target.files[0] })}
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
        />
        <button onClick={selectedVideo ? handleUpdateVideo : handleAddVideo}>
          {selectedVideo ? 'Update Video' : 'Add Video'}
        </button>
      </div>

      {/* Video List */}
      <div>
        <h2>Video List</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <div>
                <strong>{video.title}</strong> - {video.description}
                <div>
                  {/* Display video thumbnail if available */}
                  {video.thumbnail && <img src={URL.createObjectURL(video.thumbnail)} alt={video.title} width="50" />}
                  {/* Display video thumbnail preview if no thumbnail */}
                  {!video.thumbnail && <span>No Thumbnail</span>}
                </div>
                <button onClick={() => handleEditVideo(video.id)}>Edit</button>
                <button onClick={() => handleDeleteVideo(video.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Videos;
