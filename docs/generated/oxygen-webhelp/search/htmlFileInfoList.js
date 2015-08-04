fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/RESTResponse.html@@@REST Response@@@You can view REST response JSON data for different aspects of the Data Collector, such as pipeline configuration information or monitoring details...";
fil["2"]= "Administration/ShuttingDown.html@@@Shutting Down the Data Collector@@@Shut down and restart the Data Collector to apply changes to the Data Collector configuration file, environment configuration file, or user logins. To use the command line to shut down the Dat...";
fil["3"]= "Administration/ViewingDCConfigs.html@@@Viewing Data Collector Configuration Properties@@@To view Data Collector configuration properties, click Administration &gt; Configuration . For details about the configuration properties or to edit the configuration file, see Configuring the Dat...";
fil["4"]= "Administration/ViewingDirectories.html@@@Viewing Data Collector Directories@@@You can view the directories that the Data Collector uses. You might check the directories being used to access a file in the directory or to increase the amount of available space for a directory...";
fil["5"]= "Administration/ViewingJVMMetrics.html@@@Viewing JVM Metrics@@@The Data Collector provides JVM metrics for the Data Collector...";
fil["6"]= "Administration/ViewingLogData.html@@@Viewing Data Collector Logs@@@You can view and download log data. When you download log data, you can select the file to download. To view log data for the Data Collector , click Administration &gt; Logs . The console displays...";
fil["7"]= "Advanced_Config/AdvancedPipelineConfig-title.html@@@Advanced Configuration@@@...";
fil["8"]= "Advanced_Config/RuntimeProperties.html@@@Runtime Properties@@@Runtime properties are properties that you define in a file local to the Data Collector and call from within a pipeline. With runtime properties, you can define different sets of values for different Data Collectors...";
fil["9"]= "Advanced_Config/RuntimeResources.html@@@Runtime Resources@@@Similar to runtime properties, runtime resources are values that you define in a file local to the Data Collector and call from within a pipeline. But with runtime resources, you can restrict the permissions for the files to secure sensitive information. Use runtime properties to load sensitive information from files at runtime...";
fil["10"]= "Alerts/Alerts_title.html@@@Alerts@@@...";
fil["11"]= "Alerts/DataAlerts.html@@@Data Rules and Alerts@@@Data rules define the information that you want to see about the data that passes between stages. You can create data rules based on any link in the pipeline. You can also create alerts based on the data rules...";
fil["12"]= "Alerts/EmailforAlerts-Configuring.html@@@Configuring Email for Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["13"]= "Alerts/MetricAlerts.html@@@Metric Alerts@@@Create a metric alert to receive monitoring or email alerts based on metric rules. You can configure metric alerts when you configure or monitor a pipeline. You can edit or delete alerts when they are not active...";
fil["14"]= "Apx-GrokPatterns/DateTimePatterns.html@@@Date and Time Grok Patterns@@@You can use the following date and time grok patterns to define the structure of log data: MONTH...";
fil["15"]= "Apx-GrokPatterns/GeneralPatterns.html@@@General Grok Patterns@@@You can use the following general grok patterns to define the structure of log data: USER %{USERNAME} USERNAME [a-zA-Z0-9._-]+ BASE10NUM (?&lt;![0-9.+-])(?&gt;[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9...";
fil["16"]= "Apx-GrokPatterns/GrokPatterns.html@@@Grok Patterns@@@You can use the grok patterns in this appendix to define the structure of log data. You can use a single pattern or several patterns to define a larger pattern. You can also use valid sections of patterns to define a custom pattern...";
fil["17"]= "Apx-GrokPatterns/GrokPatterns_title.html@@@Grok Patterns@@@...";
fil["18"]= "Apx-GrokPatterns/JavaPatterns.html@@@Java Grok Patterns@@@You can use the following Java-related grok patterns to define the structure of log data: JAVACLASS (?:[a-zA-Z$_][a-zA-Z$_0-9]*\\.)*[a-zA-Z$_][a-zA-Z$_0-9]* JAVAFILE (?:[A-Za-z0-9_. -]+) A space...";
fil["19"]= "Apx-GrokPatterns/LogPatterns.html@@@Log Grok Patterns@@@You can use the following log-related grok patterns to define the structure of log data: SYSLOGTIMESTAMP %{MONTH} +%{MONTHDAY} %{TIME} PROG (?:[\\w._/%-]+) SYSLOGPROG...";
fil["20"]= "Apx-GrokPatterns/NetworkingPatterns.html@@@Networking Grok Patterns@@@You can use the following networking-related grok patterns to define the structure of log data: MAC (?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC}) CISCOMAC (?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4...";
fil["21"]= "Apx-GrokPatterns/PathPatterns.html@@@Path Grok Patterns@@@You can use the following path grok patterns to define the structure of log data: PATH (?:%{UNIXPATH}|%{WINPATH}) UNIXPATH (?&gt;/(?&gt;[\\w_%!$@:.,~-]+|\\\\.)*)+ TTY...";
fil["22"]= "Apx-RegEx/Examples.html@@@Regex Examples@@@Masking credit card numbers, except for one group You can use the following regular expression in the Field Masker to mask all numbers in a credit or debit card except for the last 4 digits...";
fil["23"]= "Apx-RegEx/QuickReference.html@@@Quick Reference@@@The following table includes some details you might find helpful when creating a regular expression: Character Description Examples [ ] Use brackets to define character classes. [0-9][0-9][0-9...";
fil["24"]= "Apx-RegEx/RegEx-Overview.html@@@Regular Expressions@@@A regular expression, also known as regex, describes a pattern for a string...";
fil["25"]= "Apx-RegEx/RegEx-Title.html@@@Regular Expressions@@@...";
fil["26"]= "Apx-RegEx/Regex-inthePipeline.html@@@Regular Expressions in the Pipeline@@@Though generally not required, you can use Java-based regular expressions at various locations within a pipeline to define, search for, or manipulate strings...";
fil["27"]= "Cluster_Mode/ClusterMode_title.html@@@Cluster Mode@@@...";
fil["28"]= "Cluster_Mode/HDFSRequirements.html@@@HDFS Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from HDFS: Install HDFS. Install the Data Collector on the YARN gateway node. In the pipeline properties, on the General...";
fil["29"]= "Cluster_Mode/KafkaRequirements.html@@@Kafka Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from a Kafka cluster: Verify the installation of Kafka, Spark Streaming, and YARN. Install the Data Collector on a Spark and...";
fil["30"]= "Cluster_Mode/Overview.html@@@Cluster Execution Mode@@@You can run a pipeline in standalone or cluster execution mode...";
fil["31"]= "Data_Preview/DataCollectorWindow-Preview.html@@@Data Collector Console - Preview Mode@@@You can use the Data Collector console to view how data passes through the pipeline...";
fil["32"]= "Data_Preview/DataPreview.html@@@Data Preview@@@You can preview complete and incomplete pipelines. The Data Preview icon becomes active when data preview is available...";
fil["33"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["34"]= "Data_Preview/EditingPreviewData.html@@@Editing Preview Data@@@You can edit preview data to view how a stage or group of stages processes the changed data. Edit preview data to test for data conditions that might not appear in data preview...";
fil["35"]= "Data_Preview/EditingProperties.html@@@Editing Properties@@@In data preview, you can edit stage properties to see how the changes affect preview dat...";
fil["36"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a group of linked stages within a pipeline. You can also edit the preview data to see how the group processes your changes. Preview multiple stages to verify that the group processes data as expected...";
fil["37"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing a Single Stage@@@You can preview data for a single stage. In the Preview panel, you can review the values for each record to determine if the stage transforms data as expected. You can also edit the preview data to...";
fil["38"]= "Destinations/Cassandra.html@@@Cassandra@@@Due to Cassandra requirements, the data types of the incoming fields must match the data types of the corresponding Cassandra columns. When appropriate, use a Type Converter processor earlier in the pipeline to convert data types...";
fil["39"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["40"]= "Destinations/Destinations_overview.html@@@Destinations@@@You can use LZO or Snappy compression for Hadoop FS and HBase destinations. Or you can use Snappy compression for Cassandr...";
fil["41"]= "Destinations/Elasticsearch.html@@@Elasticsearch@@@The Elasticsearch destination writes data to an Elasticsearch cluster. The Elasticsearch destination writes each record to Elasticsearch as a document...";
fil["42"]= "Destinations/Flume.html@@@Flume@@@The Flume destination writes data to a Flume source. When you write data to Flume, you pass data to a Flume client. The Flume client passes data to hosts based on client configuration properties...";
fil["43"]= "Destinations/HBase.html@@@HBase@@@You can configure the HBase destination to use HBase properties...";
fil["44"]= "Destinations/HadoopFS-destination.html@@@Hadoop FS@@@You can configure the Hadoop destination to use HDFS properties...";
fil["45"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["46"]= "Destinations/KinProducer.html@@@Kinesis Producer@@@The Kinesis Producer destination writes data to an Amazon Kinesis cluster. You can write JSON or SDC Record data to Kinesis. Kinesis Producer writes JSON data to Kinesis as multiple objects. It does not write JSON arrays...";
fil["47"]= "Destinations/Solr.html@@@Solr@@@The index mode determines how the Solr destination indexes records when writing to Solr. Index mode also determines how the destination handles errors...";
fil["48"]= "Destinations/ToError.html@@@To Error@@@The To Error destination passes records to the pipeline for error handling. Use the To Error destination to send a stream of records to pipeline error handling...";
fil["49"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or, you might use the Trash destination during development as a temporary placeholder...";
fil["50"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The StreamSets expression language enables you to create expressions that evaluate or modify data. The StreamSets expression language is based on the JSP 2.0 expression language. Use the expression...";
fil["51"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["52"]= "Expression_Language/Functions.html@@@Functions@@@Use string functions to transform string dat...";
fil["53"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["54"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["55"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["56"]= "Getting_Started/DCollector_Window.html@@@Data Collector Console@@@The Data Collector provides a console to configure pipelines, preview data, monitor pipelines, and review snapshots of dat...";
fil["57"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["58"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector console and create your first pipeline...";
fil["59"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@Let s walk through it...";
fil["60"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@cluster execution mode Pipeline execution mode that allows you to process large volumes of data from Kafka or HDFS. cluster pipeline, cluster mode pipeline A pipeline configured to run in cluster...";
fil["61"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["62"]= "Install_Config/DCConfig.html@@@Data Collector Configuration@@@You can use Kerberos authentication to connect to origin and destination systems, as well as YARN clusters...";
fil["63"]= "Install_Config/DCEnvironmentConfig.html@@@Data Collector Environment Configuration@@@You can edit the Data Collector environment configuration file, sdc-env.sh, to configure Java options...";
fil["64"]= "Install_Config/Install_Config_title.html@@@Installation and Configuration@@@...";
fil["65"]= "Install_Config/InstallationAndConfig.html@@@Installation and Configuration@@@You can install the Data Collector to be started manually or to run as a service...";
fil["66"]= "Install_Config/InstallingAdditionalStages.html@@@Installing Additional Stage Libraries@@@You can install a stage library by untarring the library and copying files...";
fil["67"]= "Install_Config/UsersandRoles.html@@@Users and Roles@@@The Data Collector provides several roles and a default user account based on each role. You can change or remove these accounts. You can also create new user accounts. For increased security, update the passwords for the default accounts. A production deployment of the Data Collector should integrate with intranet authentication...";
fil["68"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory...";
fil["69"]= "Origins/FileTail.html@@@File Tail@@@File Tail can process log and text data that includes multiple lines. You might use multiple line processing to include stack traces with log data, or to process MySQL multiline logs...";
fil["70"]= "Origins/HTTPClient.html@@@HTTP Client@@@The HTTP Client origin reads JSON data from an HTTP resource URL...";
fil["71"]= "Origins/HadoopFS-origin.html@@@Hadoop FS@@@Configure a Hadoop FS origin to read data from HDFS...";
fil["72"]= "Origins/JDBCConsumer.html@@@JDBC Consumer@@@JDBC Consumer uses offset values in the offset column to determine where to continue processing after a deliberate or unexpected stop. To ensure seamless recovery, use a primary key or indexed column as the offset column...";
fil["73"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster...";
fil["74"]= "Origins/KinConsumer.html@@@Kinesis Consumer@@@You can configure the read interval for the Kinesis Consumer. The read interval determines how long Kinesis Consumer waits before requesting additional data from Kinesis shards. By default, the Kinesis Consumer waits one second between requests...";
fil["75"]= "Origins/MongoDB.html@@@MongoDB@@@You can configure the read preference that the MongoDB origin uses. The read preference determines how the origin reads data from different members of the MongoDB replica set...";
fil["76"]= "Origins/Omniture.html@@@Omniture@@@The Omniture origin processes JSON website usage reports generated by the Omniture reporting APIs. Omniture is also known as the Adobe Marketing Cloud...";
fil["77"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data for Directory, File Tail, and Kafka Consumer origins. Preview raw source data when reviewing the data might help with origin configuration...";
fil["78"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["79"]= "Origins/UDP.html@@@UDP Source@@@The UDP Source origin reads messages from one or more UDP ports. UDP Source generates a record for every message. UDP Source can read syslog messages and Netflow messages from NetFlow Version 5...";
fil["80"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["81"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Console - Edit Mode@@@The following image shows the Data Collector console when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the pipeline data flow. 2...";
fil["82"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Record Handling@@@You can configure error record handling at a stage level and at a pipeline level...";
fil["83"]= "Pipeline_Configuration/Expressions.html@@@Expression Configuration@@@Use the following information and tips when you invoke expression completion...";
fil["84"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["85"]= "Pipeline_Configuration/PipelineDesign.html@@@Pipeline Design@@@You can use several stages to remove control characters, such as escape or end-of-transmission, from data. Remove control characters to avoid creating invalid records...";
fil["86"]= "Pipeline_Configuration/PipelineProperties.html@@@Pipeline Properties@@@A pipeline constant is a constant that you define for the pipeline and that you can use in any stage in the pipeline. Define a pipeline constant when you have a constant that you want to update easily or to use more than once...";
fil["87"]= "Pipeline_Configuration/Validation.html@@@Implicit and Explicit Validation@@@The Data Collector performs two types of validation: Implicit validation Implicit validation occurs by default as the Data Collector console saves your changes. Implicit validation lists missing or...";
fil["88"]= "Pipeline_Configuration/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data for the Data Collector...";
fil["89"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. To keep a back up, export the pipeline before you delete it. In the Pipeline library, click the Actions icon for...";
fil["90"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["91"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline to create a backup or to use the pipeline with another Data Collector...";
fil["92"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector or to restore a backup file. Import a pipeline from a pipeline file. Pipeline files are JSON files exported from a Data Collector instance...";
fil["93"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["94"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["95"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["96"]= "Pipeline_Monitoring/DataCollectorWindow-Monitor.html@@@Data Collector Console - Monitor Mode@@@In Monitor mode, you can use the Data Collector console to view data as it passes through the pipeline...";
fil["97"]= "Pipeline_Monitoring/MonitoringErrors.html@@@Monitoring Errors@@@You can view the errors related to each stage. Stage-related errors include the error records that the stage produces and other errors encountered by the stage...";
fil["98"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline, examine a sample of the data being processed, and create rules and alerts...";
fil["99"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["100"]= "Pipeline_Monitoring/Snapshots.html@@@Snapshots@@@A snapshot is a set of data captured as it moves through a running pipeline. The Data Collector can save up to ten snapshots. You can capture snapshots when you monitor a pipeline...";
fil["101"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline...";
fil["102"]= "Pipeline_Monitoring/ViewingtheRunHistory.html@@@Viewing the Run History@@@You can view a run summary for each run of the pipeline when you view the pipeline history...";
fil["103"]= "Processors/Expression.html@@@Expression Evaluator@@@When you configure an expression, the Expression Evaluator writes the results of the expression to a field. You can use an existing field or create a new field...";
fil["104"]= "Processors/FieldConverter.html@@@Field Converter@@@Configure a Field Converter to convert the data type of a field...";
fil["105"]= "Processors/FieldHasher.html@@@Field Hasher@@@Configure a Field Hasher to encode sensitive dat...";
fil["106"]= "Processors/FieldMasker.html@@@Field Masker@@@Configure a Field Masker to mask sensitive dat...";
fil["107"]= "Processors/FieldRemover.html@@@Field Remover@@@Configure a Field Remover to remove unwanted fields from the pipeline...";
fil["108"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a separator character and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["109"]= "Processors/GeoIP.html@@@Geo IP@@@The Geo IP processor provides geographic location information for IP addresses. The Geo IP processor uses the MaxMind GeoIP2 database file to provide geolocation information. You must provide your own copy of the database file...";
fil["110"]= "Processors/JSONParser.html@@@JSON Parser@@@Configure a JSON Parser to parse a JSON object in a String field...";
fil["111"]= "Processors/JavaScript.html@@@JavaScript Evaluator@@@You can choose the processing mode to use with the JavaScript Evaluator. You can use the same script in each processing mode. However, you should include error handling in the script before you run in batch mode...";
fil["112"]= "Processors/Jython.html@@@Jython Evaluator@@@You can choose the processing mode to use with the Jython Evaluator. You can use the same script in each processing mode. However, you should include error handling in the script before you run in batch mode...";
fil["113"]= "Processors/LogParser.html@@@Log Parser@@@When you use Log Parser to parse log data, you define the format of the log files to be read...";
fil["114"]= "Processors/Processors_overview.html@@@Processors@@@A processor stage represents a type of data processing that you want to perform. You can use as many processors in a pipeline as you need...";
fil["115"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["116"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@Use a Record Deduplicator to route or remove records with duplicate dat...";
fil["117"]= "Processors/StreamSelector.html@@@Stream Selector@@@A condition defines the data that passes to the associated stream. All records that meet the condition passes to the stream. Use the expression language to define conditions...";
fil["118"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces null values in a field with a constant. The Value Replacer can also replace existing values in a field with Nulls...";
fil["119"]= "Troubleshooting/AccessingErrorMessages.html@@@Accessing Error Messages@@@Informational and error messages display in different location based on the type of information: Pipeline configuration issues The Data Collector console provides guidance and error details in the...";
fil["120"]= "Troubleshooting/ClusterMode.html@@@Cluster Mode@@@Use the following tips for help with cluster mode: Why isn t the Data Collector reading data from my new Kafka partition? If you create a new partition in the Kafka topic, to launch a new Dat...";
fil["121"]= "Troubleshooting/Destinations.html@@@Destinations@@@Use the following tips for help with destination stages and systems. Why is the pipeline failing entire batches when only a few records have a problem? Due to Cassandra requirements, when you write to...";
fil["122"]= "Troubleshooting/Origins.html@@@Origins@@@Use the following tips for help with origin stages and systems. The Hadoop FS origin has an error icon with the following message: Validation_0071 - Stage  &lt;stage id&gt;  does not support  Standalone...";
fil["123"]= "Troubleshooting/Performance.html@@@Performance@@@Use the following tips for help with performance: Why is my batch size only 1000 records when I configured my origin for larger batches? The Data Collector maximum batch size overrides the maximum...";
fil["124"]= "Troubleshooting/PipelineBasics.html@@@Pipeline Basics@@@Use the following tips for help with pipeline basics: When I go to the Data Collector console, I get a  Webpage not available  error message. The Data Collector is not running. Start the Dat...";
fil["125"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
fil["126"]= "Tutorial/BasicTutorial.html@@@Basic Tutorial@@@Now before we run the basic pipeline, let s add a data rule and alert. Data rules are user-defined rules used to inspect data moving between two stages...";
fil["127"]= "Tutorial/BeforeYouBegin.html@@@Before You Begin@@@Before you start this tutorial, you ll need to do a few things...";
fil["128"]= "Tutorial/ExtendedTutorial.html@@@Extended Tutorial@@@Now that the extended pipeline is complete, let s reset the origin and run the pipeline again...";
fil["129"]= "Tutorial/Overview.html@@@Tutorial Overview@@@This tutorial walks through creating and running a pipeline. You can download sample data so you can perform data preview, run the completed pipeline, and monitor the results...";
fil["130"]= "Tutorial/Tutorial-title.html@@@Data Collector Tutorial@@@...";
