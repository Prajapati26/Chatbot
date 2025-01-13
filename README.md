# Chatbot

This project is a chatbot application built with modern web technologies, featuring a responsive UI and maintainable code structure.

## Tech Stack & Data Structures

### Core Technologies
-**React.js**: For building the user interface with reusable components.
-**TypeScript**: Provides type safety and better code readability.
-**Vite**: For fast development and optimized builds.
-**Tailwind CSS**: Utility-first CSS framework for responsive and efficient styling.

### Data Structures

#### Sheet State
The application uses a flat object structure for cell data storage:

```typescript
interface SheetState {
  data: { [key: string]: CellData };  // Cell data indexed by cell ID (e.g., "A1")
  selectedCell: string | null;         // Currently selected cell
  selectedRange: string[] | null;      // Selected range of cells
  columnWidths: { [key: string]: number }; // Column width customizations
  rowHeights: { [key: number]: number };   // Row height customizations
  numRows: number;                     // Total number of rows
  numCols: number;                     // Total number of columns
}
```

This structure was chosen because:
1. O(1) access time for cell data
2. Efficient updates for individual cells
3. Easy serialization for save/load functionality
4. Memory efficient for sparse data (empty cells don't consume memory)

#### Cell Data
Each cell contains:
```typescript
interface CellData {
  value: string;    // Displayed value
  formula: string;  // Formula or raw input
  style: CellStyle; // Cell formatting
}
```

### Formula Evaluation
-**Interactive Chat Experience**: The chatbot provides dynamic responses based on user inputs.
-**Modular Architecture**: Organized code structure with reusable components.
-**Customizable Prompts**: Easily configure chatbot behavior through prompt files.
-**Tailwind CSS Styling**: Fast and modern styling using utility-first CSS.
-**Type Safety**: Utilizes TypeScript for robust and reliable development.


# Project Run Commands  
 
    npm install
    
# if npm audit fix error Occour 

    npm audit fix

# Project Run Cammand

    npm run dev

    


 
