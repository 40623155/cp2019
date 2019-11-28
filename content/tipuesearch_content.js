var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計三甲 - 40623155 - 陳霖 \n 個人網頁： \n https://40623155.github.io/cp2019/ \n 個人倉儲： \n https://github.com/40623155/cp2019 \n 個人Youtube： \n https://www.youtube.com/channel/UC4BEyZJaGnR0oHdEUNMaeNA \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '期中報告', 'text': '', 'tags': '', 'url': '期中報告.html'}, {'title': '期中影片', 'text': '\n', 'tags': '', 'url': '期中影片.html'}, {'title': '迴圈', 'text': '引入 For loop 程式 \n // 在所有函式定義外圍所宣告的變數, 稱為全域變數, 有效範圍包含各函式內部與外部\n// for 迴圈所使用的索引值, 宣告為整數 (integer)\nint i;\n// 累加起始值 start 宣告為整數, 且設為 1\nint start = 1;\n// 累加終止值 end 宣告為整數, 且設為 10\nint end = 10;\n// 累加總數值 sum 宣告為整數\nint sum;\n\n// 定義 main() 主函式內容, 目的在利用 for 迴圈進行整數的累加\nmain(){\n  // 將前面已經宣告為全域整數的變數 sum 設為 0, 表示從 0 開始進行累加\n  sum = 0;\n  // 執行 for 迴圈內的整數累加設計, 使用前面已經宣告為全域整數的 i 作為索引變數\n  // 分別從 start 開始累加至 end, 且每次迴圈的索引值增加 1\n  for(i=start;i <= end ;i++){\n    // 當索引變數 i 所對應的值小於或等於 end 時, 對 sum 變數加上 i\n    sum += i;\n    // 可以在 for 迴圈每一個階段運算時, 列出當時的 sum 對應值, 查驗是否正確\n    //print("$sum");\n  }\n  // for 迴圈累加完成後, 列出最後訊息\n  print(\'從 $start 累加至 $end 的總數值為 $sum\');\n} \n \n \n dartpad: https://dartpad.dartlang.org/?id=0640641f25656a73d340260211f3bef2 \n gist: https://gist.github.com/40623155/0640641f25656a73d340260211f3bef2 \n void main() {\n print("你是不是偷看我網頁哈囉 ");\n} \n \n \n gist： https://gist.github.com/40623155/b69264c1852b386c3dd2b5d07cfd7d19 \n darpad： https://mde.tw/dartpad/?id=b69264c1852b386c3dd2b5d07cfd7d19 \n int i;\nint sum;\n\nmain() {\n  sum = 0;\n  for(i=1;i <=10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n print("sum = $sum");\n}\n\nfun1(){\n} \n \n', 'tags': '', 'url': '迴圈.html'}, {'title': '亂數分組', 'text': 'dartpad： https://dartpad.dartlang.org/?id=7d9809787c09d222218b55ad763dac95 \n gist： https://gist.github.com/40623155/7d9809787c09d222218b55ad763dac95 \n import \'dart:html\';\n\nvoid main() {\n  // 每一組 10 人\n  int num = 10;\n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  // 每組學員暫存數列\n  var gp_list = [];\n  // 全班分組數列\n  var cp2019 = [];\n\n  HttpRequest.getString(\n          \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\')\n      .then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var stud_list = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    stud_list.shuffle();\n    // 逐一讀取已經弄亂的學生學號數列, 利用模數運算每幾人分成一組\n    for (i = 0; i < stud_list.length; i++) {\n      // 0, 1~(num-1), num\n      if (i % num == 0) {\n        gp_list = [];\n        // 列印區隔符號\n        print(\'=\' * 20);\n        print("group $gth :");\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n        gth = gth + 1;\n      } else {\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n      }\n      if (i % num == 0) {\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n        cp2019.add(gp_list);\n      }\n    }\n    // 列出全班分組數列\n    print(cp2019);\n  });\n}\n \n \n', 'tags': '', 'url': '亂數分組.html'}, {'title': '期末範圍', 'text': '', 'tags': '', 'url': '期末範圍.html'}, {'title': 'SSH新增', 'text': '根據 https://github.com/mdecourse/cad2019/issues/20 \xa0依序 操作 \n 1.更改C:\\Users\\acer\\Downloads\\dartpad_based\\data\\portablegit\\bin中的 \n "sh_for_solvespace.exe"檔案>"sh.exe" \n \n 2.打開可攜系統，於cmd中輸入sh以進入建立ssh key畫面 \n \n 3.輸入 \n  ssh-keygen -t rsa -b 4096 -C "使用者學號" 4.於dartpad_based\\data\\home\\.ssh 中檢查是否有新增兩把鑰匙 5.下載 putty 6.打開puttygen，匯入剛剛產生的key 7.利用"save the generated key"兩個功能生成putty key 8.利用scite，打開id_rsa.pub檔案 9.複製字串內容，接著打開github>setting> SSH and GPG keys 1 0.點選右上 new ssh key 11.新增內容至stat.bat \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe 將這兩條內容新增至bat檔案內 教學影片: 老師教學影片： \n', 'tags': '', 'url': 'SSH新增.html'}, {'title': 'Class Note', 'text': '', 'tags': '', 'url': 'Class Note.html'}, {'title': 'Teach', 'text': '', 'tags': '', 'url': 'Teach.html'}, {'title': '0926', 'text': '參考教學步驟網站影片 \n https://drive.google.com/open?id=1hZqNsOj4_47hVcRRl0UdwL5BW7yatPMo \n 1.進入 mde.tw ，點選本次課程\xa0 2019 Fall 計算機程式 \xa0 \n about>課程工具套件> 下載\xa0 dartpad_based.7z \xa0 (可攜程式) \n \n 2.打開 Github ，進入本次所創建的\xa0 倉儲(CP2019) ， Clone 下載自己的倉儲至所需位置。 \n (路徑：Y:\\tmp\\) \n 01.指令碼/git clone\xa0 https://github.com/40623155/cp2019 \n \n 02.下載壓縮檔，後放入可攜資料夾內 \n \n 3.於Y:\\tmp\\cp2019中，輸入以下指令 \n *git submodule\xa0 add\xa0https://github.com/mdecourse/cmsimde\xa0 .git cmsimde \n 下載結束後，打開至Y:\\tmp\\cp2019\\cmsimde\\up_dir \n 將內容檔案文件複製到Y:\\tmp\\cp2019 \n \n', 'tags': '', 'url': '0926.html'}, {'title': '1017', 'text': '參考老師網站 \n http://mde.tw/cp2019/content/Dart2%20%E5%9F%BA%E6%9C%AC%E8%AA%9E%E6%B3%95.html \n 學習如何崁入dartpad入網站 \n 重點影片： \n \n \n 步驟： \n 1.利用dartpad確認程式碼是否為可用 \n \n 2.複製程式碼>前往 github >打開 gist \n \n 3.建立gist>貼上程式碼>程式檔名後要加上.dart \n \n 4.複製建立好的網址後碼>貼上dartpad查看是否能顯示出來 \n 貼上dartpad用法 \n https://dartpad.dartlang.org/ ?id=+複製的後碼(紅框部分) \n \n 5.崁入近端網站，利用 <> 功能崁入dartpad功能 \n 崁入dartpad用法 \n 利用<>內字串，會產生出dartpad介面 \n \n \n 6. 崁入近端網站，利用 </> 功能崁入dartpad 語法 \n \n \n \n', 'tags': '', 'url': '1017.html'}, {'title': 'Videos', 'text': '', 'tags': '', 'url': 'Videos.html'}, {'title': 'Origin', 'text': '', 'tags': '', 'url': 'Origin.html'}, {'title': 'Course', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'Course.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Git\xa0command', 'text': 'git status ：(展示目前狀態) \n git branch ：分支名 (創建新分支) \n git log --oneline --graph --all：(檢查各提交間的關聯) \n \xa0git merge 分支名：(合併分支) \n git log ：(查看版次) \n git clone\xa0 ：(從遠端倉儲複製資料到指定資料夾) \n git add .\xa0 \xa0：(提交的所有修改放到暫存區) \n git comit -m： (暫存區的資料提交到分支) \n git push ： (將資料推送到遠端) \n cd\xa0 資料夾名稱：(轉換當前的目錄位置) \n git checkout：(替換工作區的版本) \n', 'tags': '', 'url': 'Git\xa0command.html'}]};