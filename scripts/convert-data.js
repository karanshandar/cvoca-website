const fs = require('fs');
const path = require('path');

// Function to parse CSV line with proper handling of quoted fields
function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Function to convert CSV to JSON
function csvToJson(csvContent) {
  const lines = csvContent.trim().split('\n');
  const headers = parseCsvLine(lines[0]);
  
  const jsonData = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue; // Skip empty lines
    
    const values = parseCsvLine(lines[i]);
    const row = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    jsonData.push(row);
  }
  
  return jsonData;
}

// Function to process a CSV file
function processCsvFile(inputPath, outputPath) {
  try {
    console.log(`Processing: ${inputPath}`);
    
    // Read CSV file
    const csvContent = fs.readFileSync(inputPath, 'utf8');
    
    // Convert to JSON
    const jsonData = csvToJson(csvContent);
    
    // Write JSON file
    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`✓ Converted ${jsonData.length} records to: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

// Main conversion function
function convertData() {
  console.log('🔄 Starting CSV to JSON conversion...\n');
  
  // Define file mappings
  const fileMappings = [
    {
      input: 'data/committees.csv',
      output: 'src/data/committees.json'
    },
    {
      input: 'data/managing-committee.csv',
      output: 'src/data/managingCommittee.json'
    },
    {
      input: 'data/past-presidents.csv',
      output: 'src/data/pastPresidents.json'
    }
  ];
  
  // Process each file
  fileMappings.forEach(mapping => {
    if (fs.existsSync(mapping.input)) {
      processCsvFile(mapping.input, mapping.output);
    } else {
      console.error(`✗ Input file not found: ${mapping.input}`);
    }
  });
  
  console.log('\n✅ Data conversion completed!');
}

// Run the conversion
if (require.main === module) {
  convertData();
}

module.exports = { convertData, csvToJson }; 