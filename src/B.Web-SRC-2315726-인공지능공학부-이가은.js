document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://127.0.0.1:5000/api/matches"; 
    const resultsContainer = document.getElementById("match-results");

    // 테이블 생성 함수
    const createTable = (data) => {
        const table = document.createElement("table");
        table.border = "1";

        // 테이블 헤더 생성
        const headerRow = document.createElement("tr");
        ["Season", "Date", "Opponent", "Location", "Tottenham Goals", "Opponent Goals", "Result", "Goal Difference"].forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // 데이터 행 추가
        data.forEach(match => {
            const row = document.createElement("tr");
            ["Season", "Date", "Opponent", "Location", "TottenhamGoals", "OpponentGoals", "Result", "goal_difference"].forEach(key => {
                const td = document.createElement("td");
                td.textContent = match[key] !== null ? match[key] : "N/A"; 
                row.appendChild(td);
            });
            table.appendChild(row);
        });

        return table;
    };

    // 데이터 가져오기 및 테이블 렌더링
    const fetchAndDisplayMatches = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json(); 
            console.log("Fetched Data:", data);

            
            resultsContainer.innerHTML = "";
            resultsContainer.appendChild(createTable(data));
        } catch (error) {
            console.error("Error fetching or displaying data:", error);
            resultsContainer.textContent = "Error loading match results.";
        }
    };


    fetchAndDisplayMatches();
});
