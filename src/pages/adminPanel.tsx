import React, { useEffect, useState } from 'react';

// Define the type for the email data
interface EmailData {
  name: string;
  email: string;
  _id: string;
}

const AdminPanel = () => {
  const [mails, setMails] = useState<EmailData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Fetch email data from the server
    fetch('https://xerocodee-backend.vercel.app/emails')
      .then((response) => response.json())
      .then((data) => setMails(data))
      .catch((error) => console.error('Error fetching email data:', error));
  }, []);

  const handleEdit = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // Create a copy of the mails array
    const updatedMails = [...mails];
    // Update the specific email data based on the index
    updatedMails[index][e.target.name as keyof EmailData] = e.target.value;
    // Set the state with the updated data
    setMails(updatedMails);
  };

  const handleSave = async (index: number, id: string) => {
    try {
      // Send the updated data to the server
      const response = await fetch(`https://xerocodee-backend.vercel.app/emails/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mails[index]),
      });

      if (response.status === 200) {
        // Data updated successfully
        alert('Data updated successfully.');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      // Error occurred while sending the request
      alert('An error occurred. Please try again later.');
    }
  };

  // Filter the mail data based on the search query
  const filteredMails = mails.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <h2>Email Data</h2>
        <div>
          <input
            className='searchInput'
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMails.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleEdit(index)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      onChange={handleEdit(index)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(index, data._id)}>Save</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
