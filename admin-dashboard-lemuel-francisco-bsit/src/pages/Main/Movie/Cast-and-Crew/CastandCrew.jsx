import React, { useState, useEffect } from 'react';

const CastAndCrewCrud = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', bio: '', photo: '' });

  useEffect(() => {
    // Fetch current cast & crew data from API or local storage
    // setMembers(fetchedData);
  }, []);

  const handleAddMember = () => {
    // Add new member logic (API or local state update)
    setMembers([...members, formData]);
    setFormData({ name: '', role: '', bio: '', photo: '' });
  };

  const handleEditMember = (id) => {
    const memberToEdit = members.find(member => member.id === id);
    setSelectedMember(memberToEdit);
    setFormData(memberToEdit);
  };

  const handleUpdateMember = () => {
    // Update logic (API or local state update)
    setMembers(members.map(member => member.id === selectedMember.id ? formData : member));
    setSelectedMember(null);
    setFormData({ name: '', role: '', bio: '', photo: '' });
  };

  const handleDeleteMember = (id) => {
    // Delete logic (API or local state update)
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <div>
      <h1>Cast & Crew Management</h1>
      
      {/* Add New Member Form */}
      <div>
        <h2>{selectedMember ? 'Edit Cast & Crew' : 'Add New Cast & Crew'}</h2>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          value={formData.role} 
          onChange={(e) => setFormData({...formData, role: e.target.value})} 
          placeholder="Role" 
        />
        <textarea 
          value={formData.bio} 
          onChange={(e) => setFormData({...formData, bio: e.target.value})} 
          placeholder="Biography" 
        />
        <input 
          type="file" 
          onChange={(e) => setFormData({...formData, photo: e.target.files[0]})} 
        />
        <button onClick={selectedMember ? handleUpdateMember : handleAddMember}>
          {selectedMember ? 'Update Member' : 'Add Member'}
        </button>
      </div>
      
      {/* Cast & Crew List */}
      <div>
        <h2>Cast & Crew List</h2>
        <ul>
          {members.map((member) => (
            <li key={member.id}>
              <div>
                <strong>{member.name}</strong> - {member.role}
                <button onClick={() => handleEditMember(member.id)}>Edit</button>
                <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CastAndCrewCrud;
